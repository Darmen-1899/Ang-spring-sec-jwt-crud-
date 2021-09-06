package com.rocket_hub.rocket_hub_galamat.domain.user.service;

import com.rocket_hub.rocket_hub_galamat.domain.user.repository.UserRepository;
import com.rocket_hub.rocket_hub_galamat.domain.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class UserService  {

    @Autowired
    private final UserRepository userRepository;



    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;

    }


    public User save(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }


    public User update(User user){
        return userRepository.save(user);
    }

    public User findByUsername(String username){
        System.out.println("FIND by username " + username);
        return userRepository.findByUsername(username);
    }




    public List<User> findAll()
    {
        return userRepository.findAll();
    }

    public Optional<User> findById(Long id)
    {
        return userRepository.findById(id);
    }

    public void deleteUser(Long id){
        userRepository.deleteUserById(id);
    }

    public User findByLoginAndPassword(String username, String password) {
        System.out.println("USERNAME:"+username);
        System.out.println("PASSWORD:"+password);
        User userEntity = findByUsername(username);
        System.out.println("USERNAME:"+username);
        System.out.println("PASSWORD:"+password);
        if (userEntity != null) {
            System.out.println("NOT NULLLLLLLLLLLLLLLLLLLLLLLl");
            if (passwordEncoder.matches(password, userEntity.getPassword())) {
                return userEntity;
            }
        }
        System.out.println(" NULLLLLLLLLLLLLLLLLLLLLLLl");
        return null;
    }


}
