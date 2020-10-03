const express = require('express');
const pool = require('../database/db');
const bcrypt = require('bcryptjs');
const moment = require('moment')
const jwt = require('jsonwebtoken')
const {sign} =  require('jsonwebtoken')
module.exports.category = async (req, res, next) => {
    try{
        let result = await pool.query(`select activewindowtitle, total_time from windowtitle`)
        return res.json({success:1,data:result.rows})
    }
    catch(err ){
        console.log(err);
        return res.json({success:0,error:err.message})
    }
 }

 module.exports.idletime = async(req,res,next)=>{
     try{
         let result = await pool.query(`select total_idle,active_time from idletime where currenttime>'2020-09-04' and currenttime<'2020-09-05' order by currenttime desc`)
            return res.json({success:1,data:result.rows})
        }
     catch(err){
        return res.json({success:0,error:err.message})     
    }
 }

 module.exports.gettodaywork = async(req,res,next)=>{
     const {today} = req.body;
    //  console.log('today',today)
    try{
        let result = await pool.query(`select total_idle,active_time from idletime where currenttime=$1 order by currenttime desc`,[today])
           return res.json({success:1,data:result.rows})
       }
    catch(err){
       return res.json({success:0,error:err.message})     
   }
}

module.exports.getyesterdaywork = async(req,res,next)=>{
    const {yesterday} = req.body;
    // console.log('yesterday',yesterday)

   try{
       let result = await pool.query(`select total_idle,active_time from idletime where currenttime=$1 order by currenttime desc`,[yesterday])
          return res.json({success:1,data:result.rows})
      }
   catch(err){
      return res.json({success:0,error:err.message})     
  }
}

module.exports.getLastWeekwork = async(req,res,next)=>{
    const {start,end} = req.body;
    // console.log('week',start,end)

   try{
       let result = await pool.query(`select total_idle,active_time from idletime where currenttime>$1 and currenttime<$2 order by currenttime desc`,[start,end])
          return res.json({success:1,data:result.rows})
      }
   catch(err){
      return res.json({success:0,error:err.message})     
  }
}

module.exports.getLastMonthwork = async(req,res,next)=>{
    const {last_months} = req.body;
    const year = last_months.slice(0,4)
    const month = last_months.slice(5,7)
    var startDate = moment([year, month - 1]).format('YYYY-MM-DD')
    var endDate = moment(last_months).endOf('month').format('YYYY-MM-DD');
    // console.log('month',startDate,endDate)

   try{
       let result = await pool.query(`select total_idle,active_time from idletime where currenttime>$1 and currenttime<$2 order by currenttime desc`,[startDate,endDate])
          return res.json({success:1,data:result.rows})
      }
   catch(err){
      return res.json({success:0,error:err.message})     
  }
}

module.exports.getLastYearwork = async(req,res,next)=>{
    const {last_year} = req.body;
    const year = last_year.slice(0,4)
    var start = moment([year]).startOf('year').format('YYYY-MM-DD');
    var end = moment([year]).endOf('year').format('YYYY-MM-DD');
    // console.log('year',start,end)

   try{
       let result = await pool.query(`select total_idle,active_time from idletime where currenttime>$1 and currenttime<$2 order by currenttime desc`,[start,end])
          return res.json({success:1,data:result.rows})
      }
   catch(err){
      return res.json({success:0,error:err.message})     
  }
}

module.exports.getAllwork = async(req,res,next)=>{
   try{
       let result = await pool.query(`select total_idle,active_time from idletime`)
          return res.json({success:1,data:result.rows})
      }
   catch(err){
      return res.json({success:0,error:err.message})     
  }
}

 module.exports.week = async(req,res,next)=>{
     let x= 50
    try{
        let result = await pool.query(`select active_time from idletime where total_idle=$1`,[x])
        console.log('data',result)
           return res.json({success:1,data:result.rows})
       }
    catch(err){
       return res.json({success:0,error:err.message})     
   }
}

module.exports.userLogin = async(req,res,next)=>{
    const {email,password} = req.body;
    console.log('body',req.body)
    try{
        pool.query('select * from users where email=$1 and password=$2',[email,password])
        .then(result=>{
            // bcrypt.compare(password,user.password)
            // .then(match=>{
                console.log('res',result.rows[0])
                // const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
                //     expiresIn: "1h"
                //   });
              return res.json({success:1,data:result.rows[0]})
    //     let result = await pool.query(`select id,name,organization,roles,status,license_key from users where email=$1 and password=$2`,[email,password])
    //        return res.json({success:1,data:result.rows[0]})
    })
}
    catch(err){
       return res.json({success:0,error:err.message})     
   }
}
