package com.ecommerce.controller;

import com.ecommerce.entity.Contact;
import com.ecommerce.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("")
    public void addContact(@RequestBody Contact contact)
    {
        contactService.addContact(contact);
    }


}
