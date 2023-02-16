
package com.parsoya.constructions.parsoya_constructions.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parsoya.constructions.parsoya_constructions.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
