package IEADP.CashBook.controller;

import IEADP.CashBook.dto.EntryDTO;
import IEADP.CashBook.model.contributor.Contributor;
import IEADP.CashBook.model.entry.Entry;
import IEADP.CashBook.model.purpose.Purpose;
import IEADP.CashBook.model.user.User;
import IEADP.CashBook.repository.ContributorRepository;
import IEADP.CashBook.repository.PurposeRepository;
import IEADP.CashBook.repository.UserRepository;
import IEADP.CashBook.service.EntryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/entries")
public class EntryController {
    private final EntryService entryService;
    private final UserRepository userRepository;
    private final ContributorRepository contributorRepository;
    private final PurposeRepository purposeRepository;

    public EntryController(EntryService entryService, UserRepository userRepository, ContributorRepository contributorRepository, PurposeRepository purposeRepository) {
        this.entryService = entryService;
        this.userRepository = userRepository;
        this.contributorRepository = contributorRepository;
        this.purposeRepository = purposeRepository;
    }

    @GetMapping
    public List<EntryDTO> getAll() {
        return entryService.getAll();
    }

    @PostMapping
    public ResponseEntity postEntry(@RequestBody EntryDTO body) {
        Entry newEntry = new Entry();
        User user = this.userRepository.findById(body.userId()).orElseThrow(() -> new RuntimeException("User not found"));
        Contributor contributor = this.contributorRepository.findById(body.contributorId()).orElseThrow(() -> new RuntimeException("Contributor not found"));
        Purpose purpose = this.purposeRepository.findById(body.purposeId()).orElseThrow(() -> new RuntimeException("Purpose not found"));

        newEntry.setUser(user);
        newEntry.setContributor(contributor);
        newEntry.setPurpose(purpose);
        newEntry.setAmount(body.amount());
        newEntry.setEntryDate(body.entryDate());

        this.entryService.save(newEntry);

        return ResponseEntity.ok(new EntryDTO(newEntry.getUser().getId(), newEntry.getContributor().getId(), newEntry.getPurpose().getId(), newEntry.getAmount(), newEntry.getPaymentMethod(), newEntry.getEntryDate()));
    }
}
