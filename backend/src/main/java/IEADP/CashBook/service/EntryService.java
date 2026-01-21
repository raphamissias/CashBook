package IEADP.CashBook.service;

import IEADP.CashBook.dto.EntryDTO;
import IEADP.CashBook.model.entry.Entry;
import IEADP.CashBook.repository.EntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntryService {
    private final EntryRepository entryRepository;

    public EntryService(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    public List<EntryDTO> getAll() {
        return entryRepository.findAll()
                .stream()
                .map(this::toDTO)
                .toList();
    }

    private EntryDTO toDTO(Entry entry) {
        return new EntryDTO(
                entry.getUser().getId(),
                entry.getContributor().getId(),
                entry.getPurpose().getId(),
                entry.getAmount(),
                entry.getPaymentMethod(),
                entry.getEntryDate()
        );
    }

    public Entry save(Entry entry) {
        return entryRepository.save(entry);
    }

    public void delete(Long id) {
        entryRepository.deleteById(id);
    }
}
