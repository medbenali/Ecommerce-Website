package com.ecommerce.service;

import com.ecommerce.entity.Contact;
import com.ecommerce.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public void addContact(Contact contact){
        contactRepository.save(contact);
    }
}
