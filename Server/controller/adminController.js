const express = require('express');
const pool = require('../database/db')

module.exports.getalluser = async (req, res, next) => {
    try{
        let result = await pool.query(`select * from users`)
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
 }

module.exports.getlicense = async (req, res, next) => {
    try{
        let result = await pool.query(`select * from license where organisation='Boticx Labs'`)
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.getrole = async (req, res, next) => {
    try{
        let result = await pool.query(`select * from roles`)
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.getuserById = async (req, res, next) => {
    let id = req.body.Id
    try{
        let result = await pool.query(`select * from users where id=$1`,[id])
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}
module.exports.updateuserById = async (req, res, next) => {
    let id = req.body.Id
    try{
        let result = await pool.query(`select * from users where id=$1`,[id])
        return res.json({success:1,data:result.rows[0]})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.changeStatus = async (req, res, next) => {
    let id = req.body.Id
    try{
        let result = await pool.query(`update users set status=$1 where id=$2`,['Inactive',id])
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.activeUser = async (req, res, next) => {
    let id = req.body.Id
    try{
        let result = await pool.query(`update users set status=$1 where id=$2`,['Active',id])
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.deleteUser = async (req, res, next) => {
    let id = req.body.Id
    try{
        let result = await pool.query(`delete from users where id=$1`,[id])
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}


module.exports.Getdepartment = async (req, res, next) => {
    let id = req.body.Id
    try{
        let result = await pool.query(`select * from department`)
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.viewDepartment = async (req, res, next) => {
    let dep_name = req.body.dep_name
    try{
        let result = await pool.query(`select * from users where department=$1`,[dep_name])
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}


module.exports.deleteDepartment = async (req, res, next) => {
    let id= req.body.Id
    try{
        let result = await pool.query(`delete from department where department_id=$1`,[id])
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}


module.exports.getdepartmentById = async (req, res, next) => {
    let id= req.body.Id
    try{
        let result = await pool.query(`select * from department where department_id=$1`,[id])
        return res.json({success:1,data:result.rows[0]})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}
module.exports.updateDepart = async (req, res, next) => {
    const {Id,department_name,department_head}= req.body;
    try{
        let result = await pool.query(`update department set department_name=$1, department_head=$2 where department_id=$3`,[department_name,department_head,Id])
        return res.json({success:1,data:result.rows[0]})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.createDepart = async (req, res, next) => {
    const {department_name,department_head}= req.body;
    try{
        let result = await pool.query(`insert into department (department_name, department_head) values($1,$2)`,[department_name,department_head])
        return res.json({success:1,data:result.rows[0]})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.UpdateUser = async (req, res, next) => {
    try{
        let result = await pool.query(
            `update users set email=$1,password=$2,name=$3,orgtanization=$4,address=$5,city=$6,designation=$7,mobile=$8,joining_date=$9,date_of_birth=$10,marital_status=$11,department=$12,gender=$13,roles=$14 where id=$15`,
            [
                req.body.email,
                req.body.password,
                req.body.name,
                req.body.organization,
                req.body.address,
                req.body.city,
                req.body.designation,
                req.body.mobile,
                req.body.joining_date,
                req.body.date_of_birth,
                req.body.marital_status,
                req.body.department,
                req.body.gender,
                req.body.roles,
                req.body.user_id
            ])
        return res.json({success:1,data:result.rows[0]})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}

module.exports.CreateUser = async (req, res, next) => {
    try{
        let result = await pool.query(
            `insert into users (email,password,name,organization,address,city,designation,mobile,joining_date,date_of_birth,marital_status,department,gender,roles) values($1,$2,,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14`,
            [
                req.body.email,
                req.body.password,
                req.body.name,
                req.body.organization,
                req.body.address,
                req.body.city,
                req.body.designation,
                req.body.mobile,
                req.body.joining_date,
                req.body.date_of_birth,
                req.body.marital_status,
                req.body.department,
                req.body.gender,
                req.body.roles,
            ])
        return res.json({success:1,data:result.rows[0]})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
}


