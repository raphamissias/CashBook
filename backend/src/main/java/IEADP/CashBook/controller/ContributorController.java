package IEADP.CashBook.controller;

import IEADP.CashBook.dto.ContributorDTO;
import IEADP.CashBook.dto.RegisterRequestDTO;
import IEADP.CashBook.dto.ResponseDTO;
import IEADP.CashBook.model.contributor.Contributor;
import IEADP.CashBook.service.ContributorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contributors")
public class ContributorController {
    private final ContributorService contributorService;

    public ContributorController(ContributorService contributorService) {
        this.contributorService = contributorService;
    }

    @GetMapping
    public ResponseEntity<List<Contributor>> getAll() {
        return ResponseEntity.ok(this.contributorService.getAll());
    }

    @PostMapping
    public ResponseEntity postContributor(@RequestBody ContributorDTO body) {
        Optional<Contributor> contributor = this.contributorService.getByName(body.name());

        if (contributor.isEmpty()) {
            Contributor newContributor = new Contributor();

            newContributor.setName(body.name());
            newContributor.setPhoneNumber(body.phoneNumber());
            newContributor.setIsActive(body.isActive());
            this.contributorService.save(newContributor);

            return ResponseEntity.ok(new ContributorDTO(newContributor.getName(), newContributor.getPhoneNumber(), newContributor.getIsActive()));
        }

        return ResponseEntity.badRequest().build();
    }
}
