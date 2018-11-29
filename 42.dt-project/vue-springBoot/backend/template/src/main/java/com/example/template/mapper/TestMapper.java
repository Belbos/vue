package com.example.template.mapper;

import java.util.List;

import com.example.template.vo.UserVO;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper 
public interface TestMapper { 
	// @Select("SELECT DOC_NUM,TEXT FROM INSTA")
	@Select("SELECT  TO_DATE(DATETIME,'YYMMDDHH24MISS') PRINTDATE, substr(DATETIME,0,6) SEARCHDATE, A.* FROM MAIN_RESULTMODEL A")  
	public List<UserVO> readHome(); 
}

