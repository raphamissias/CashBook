package IEADP.CashBook.service;

import IEADP.CashBook.model.contributor.Contributor;
import IEADP.CashBook.model.purpose.Purpose;
import IEADP.CashBook.repository.PurposeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PurposeService {
    private final PurposeRepository purposeRepository;

    public PurposeService(PurposeRepository purposeRepository) {
        this.purposeRepository = purposeRepository;
    }

    public List<Purpose> getAll() {
        return this.purposeRepository.findAll();
    }

    public Optional<Purpose> getByName(String name) {
        return this.purposeRepository.findByName(name);
    }

    public Purpose save(Purpose purpose) {
        return purposeRepository.save(purpose);
    }

    public void delete(Long id) {
        purposeRepository.deleteById(id);
    }
}
