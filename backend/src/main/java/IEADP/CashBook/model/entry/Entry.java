package IEADP.CashBook.model.entry;

import IEADP.CashBook.model.contributor.Contributor;
import IEADP.CashBook.model.purpose.Purpose;
import IEADP.CashBook.model.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "entries")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "contributor_id")
    private Contributor contributor;
    @ManyToOne
    @JoinColumn(name = "purpose_id")
    private Purpose purpose;
    private Float amount;
    @Column(name = "payment_method")
    private String paymentMethod;
    @Column(name = "entry_date", nullable = true)
    private LocalDate entryDate;

    @PrePersist
    protected void onCreate() {
        if (entryDate == null) {
            entryDate = LocalDate.now();
        }
    }
}
