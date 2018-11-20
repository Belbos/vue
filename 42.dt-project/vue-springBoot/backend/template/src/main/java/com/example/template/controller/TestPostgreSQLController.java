package com.example.template.controller;

import com.example.template.model.Customer;
import com.example.template.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class TestPostgreSQLController {

	@Autowired
	private CustomerRepository customerRepository;

	// @RequestMapping("/save")
	// public @ResponseBody String process() {
	// 	customerRepository.save(new Customer("Neo", "Chan"));
	// 	customerRepository.save(new Customer("Luke", "Liu"));
	// 	customerRepository.save(new Customer("Ran", "Guo"));
	// 	customerRepository.save(new Customer("Joey", "Chen"));
	// 	customerRepository.save(new Customer("Larry", "Huang"));
	// 	return "Done";
	// }

	@RequestMapping("/findall")
	public @ResponseBody String findAll() {
		String result = "<html>";

		for (Customer cust : customerRepository.findAll()) {
			result += "<div>" + cust.toString() + "</div>";
		}

		return result + "</html>";
	}

	// @RequestMapping("/findbyid")
	// public @ResponseBody String findById(@RequestParam("id") long id) {
	// 	String result = "";
	// 	result = customerRepository.findOne(id).toString();
	// 	return result;
	// }

	@RequestMapping("/findbylastname")
	public @ResponseBody String fetchDataByLastName(@RequestParam("lastname") String lastName) {
		String result = "<html>";

		for (Customer cust : customerRepository.findByLastName(lastName)) {
			result += "<div>" + cust.toString() + "</div>";
		}

		return result + "</html>";
	}

	@Autowired
	private JdbcTemplate jdbcTemplate;

	// @RequestMapping(value = "/jdbc")
	// public @ResponseBody String dailyStats(@RequestParam Integer id) {
	// 	String query = "SELECT id, firstname, lastname from customer where id = " + id;

	// 	return jdbcTemplate.queryForObject(query, (resultSet, i) -> {
	// 		System.out.println(resultSet.getLong(1)+","+ resultSet.getString(2)+","+ resultSet.getString(3));
	// 		return (resultSet.getLong(1)+","+ resultSet.getString(2)+","+ resultSet.getString(3));
	// 	});
    // }
    
    @RequestMapping(value = "/")
	public @ResponseBody String dailyStats() {
		String query = "SELECT * from main_resultmodel";

		return jdbcTemplate.queryForObject(query, (resultSet, i) -> {
			System.out.println(resultSet.getLong(1)+","+ resultSet.getString(2)+","+ resultSet.getString(3));
			return (resultSet.getLong(1)+","+ resultSet.getString(2)+","+ resultSet.getString(3));
		});
    }
    

}
			