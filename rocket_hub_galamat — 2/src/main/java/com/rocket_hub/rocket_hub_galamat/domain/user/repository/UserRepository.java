package com.rocket_hub.rocket_hub_galamat.domain.user.repository;

import com.rocket_hub.rocket_hub_galamat.domain.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {

    void deleteUserById(Long id);


    User findByUsername(String username);

    String findByRole(String role);
}
