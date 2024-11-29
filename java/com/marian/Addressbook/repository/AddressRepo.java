package com.marian.Addressbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marian.Addressbook.model.Addressbook;

public interface AddressRepo extends JpaRepository<Addressbook, Integer>{

}
