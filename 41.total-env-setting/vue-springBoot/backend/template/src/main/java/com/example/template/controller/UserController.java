package com.example.template.controller;

import java.util.List;

import com.example.template.mapper.TestMapper;
import com.example.template.vo.ResponseVO;
import com.example.template.vo.UserVO;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@MapperScan("com.example.template.mapper")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
	TestMapper testMapper;     

    @GetMapping
    public ResponseVO<?> getUsers() {
        ResponseVO<List<UserVO>> resp = new ResponseVO<>();

        List<UserVO> home = testMapper.readHome();

        resp.setResponse(home);
        return resp;
    }
    

    @GetMapping("/{id}")
    public ResponseVO<?> getUsers(@PathVariable int id) {
        ResponseVO<UserVO> resp = new ResponseVO<>();

        List<UserVO> home = testMapper.readHome();

        resp.setResponse(home.get(id));
        return resp;
    }


}