package com.ecommerce.controller;

import com.ecommerce.entity.Contact;
import com.ecommerce.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/contact")
    public void addContact(@RequestBody Contact contact)
    {
        contactService.addContact(contact);
    }


}
