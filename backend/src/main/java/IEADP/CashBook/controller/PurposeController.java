package IEADP.CashBook.controller;

import IEADP.CashBook.dto.ContributorDTO;
import IEADP.CashBook.dto.PurposeDTO;
import IEADP.CashBook.model.purpose.Purpose;
import IEADP.CashBook.service.PurposeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/purposes")
public class PurposeController {
    private final PurposeService purposeService;

    public PurposeController(PurposeService purposeService) {
        this.purposeService = purposeService;
    }

    @GetMapping
    public List<Purpose> getAll() {
        return purposeService.getAll();
    }

    @PostMapping
    public ResponseEntity postPurpose(@RequestBody PurposeDTO body) {
        Optional<Purpose> purpose = this.purposeService.getByName(body.name());

        if (purpose.isEmpty()) {
            Purpose newPurpose = new Purpose();

            newPurpose.setName(body.name());
            newPurpose.setIsActive(body.isActive());
            this.purposeService.save(newPurpose);

            return ResponseEntity.ok(new PurposeDTO(newPurpose.getName(), newPurpose.getIsActive()));
        }

        return ResponseEntity.badRequest().build();
    }
}
