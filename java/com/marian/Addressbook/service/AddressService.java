package com.marian.Addressbook.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.Addressbook.model.Addressbook;
import com.marian.Addressbook.repository.AddressRepo;


@Service

public class AddressService {
	@Autowired
    private AddressRepo addressRepo;

    // Retrieve all users
    public List<Addressbook> getAllAddresses() {
        return addressRepo.findAll();
    }

    // Save a new user
    public Addressbook saveAddress(Addressbook user) {
        return addressRepo.save(user);
    }
    //public AddressBook saveAddressBookInfo(AddressBook address) {
		//return addressbookRepo.save(address);
	}



