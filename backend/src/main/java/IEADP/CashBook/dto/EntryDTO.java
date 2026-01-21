package IEADP.CashBook.dto;

import java.time.LocalDate;

public record EntryDTO(Long userId, Long contributorId, Long purposeId, Float amount, String paymentMethod, LocalDate entryDate) {
}
