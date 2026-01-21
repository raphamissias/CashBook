package IEADP.CashBook.repository;

import IEADP.CashBook.model.contributor.Contributor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContributorRepository extends JpaRepository<Contributor, Long> {
    Optional<Contributor> findByName(String name);
}
