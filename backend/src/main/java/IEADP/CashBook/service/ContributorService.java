package IEADP.CashBook.service;

import IEADP.CashBook.model.contributor.Contributor;
import IEADP.CashBook.repository.ContributorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContributorService {
    private final ContributorRepository contributorRepository;

    public ContributorService(ContributorRepository contributorRepository) {
        this.contributorRepository = contributorRepository;
    }

    public List<Contributor> getAll() {
        return contributorRepository.findAll();
    }

    public Optional<Contributor> getByName(String name) {
        return contributorRepository.findByName(name);
    }

    public Contributor save(Contributor contributor) {
        return contributorRepository.save(contributor);
    }

    public void delete(Long id) {
        contributorRepository.deleteById(id);
    }
}
