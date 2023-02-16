package com.parsoya.constructions.parsoya_constructions.model;


import java.util.Date;
import java.util.List;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="full_name")
    private String name;

    private String userType;
    private Date modifiedDate;
    private boolean isActive;
    private String userIdType;
    private String userIdNo;
    private int age;
    private Date dob;
    private String gender;
    private String phone;

    //	@OneToMany
//	@JoinColumn(name ="addressId")
//	private List<Address> address;
    private String email;
    private String password;


}
