package com.marian.Addressbook.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marian.Addressbook.model.Addressbook;
import com.marian.Addressbook.service.AddressService;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
	@Autowired
	
    private AddressService addressService;

    // Endpoint to fetch all users
    @GetMapping("/api/address") 
    public List<Addressbook> showAllAddresses() {
        return addressService.getAllAddresses();
    }
    
    @PostMapping("/api/address")
	public Addressbook addEmployee(@RequestBody Addressbook address){
		return addressService.saveAddress(address);
	}
}
