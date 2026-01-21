package IEADP.CashBook.model.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String phoneNumber;
    @Column(unique = true)
    private String email;
    private String password;
    @Column(nullable = true)
    private Boolean isAdmin = false;
    @Column(nullable = true)
    private Boolean isActive = true;
}
