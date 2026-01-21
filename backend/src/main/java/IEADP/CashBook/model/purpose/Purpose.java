package IEADP.CashBook.model.purpose;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "purposes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Purpose {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name = "is_active", nullable = true)
    private Boolean isActive = true;
}
