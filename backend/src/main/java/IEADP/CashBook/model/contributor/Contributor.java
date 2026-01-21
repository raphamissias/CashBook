package IEADP.CashBook.model.contributor;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "contributors")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contributor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phoneNumber;
    @Column(nullable = true)
    private Boolean isActive = true;
}
