function getJson(file,callback) {
    var x=new XMLHttpRequest();
    x.overrideMimeType("application/json");
    x.open("GET",file,true);
    x.onreadystatechange=function() {
      if(x.readyState === 4 && x.status===200)
      {
        callback(x.responseText);
      }
    }
    x.send();
}
  
getJson("data.json", function(text) {
  
    var d=JSON.parse(text);
    console.log(d);
    basics(d.mydetails);
    edu_cation(d.education);
    tech_skill(d.skills);
    other_skills(d.Otherskills);
    
       
 
   
  });
   
  var main = document.querySelector(".main-div");

  function basics(r){
  
   

    var n=document.createElement("img");
    n.src="media/ImageChar.jpg";
    n.classList.add("test");
    main.appendChild(n);
   


    

    var p=document.createElement("h3");    
    p.textContent= r.name;
    p.classList.add("test1");
    main.appendChild(p);

    var q=document.createElement("small");
    q.textContent= r.email;
    q.classList.add("test2");
    main.appendChild(q);

    var n1 = document.createElement("h6");
    n1.textContent=r.phnno;
    n1.classList.add("phn");
    main.appendChild(n1); 


    
    var v1=document.createElement("h4");
    v1.textContent="About me";
    main.appendChild(v1);
    v1.appendChild(document.createElement("hr"));
    var f = document.createElement("p");
  
    f.textContent=r.Aboutme;
    f.classList.add("about");
    main.appendChild(f); 
   
 

  }

  
  function edu_cation(t){
    var h=document.createElement("h4");
    h.textContent="Education";
    main.appendChild(h);
    h.appendChild(document.createElement("hr"));
    var table = document.createElement("table");
    var row="";
    for(var i in t){
        row += "<tr><td>" + t[i].Edu +"</td><td>"+t[i].Sname+"</td><td>"+t[i].grade+"</td></tr>";

    }
    table.innerHTML=row;
    main.appendChild(table);
    }



    function tech_skill(u){
    var v=document.createElement("h4");
    v.textContent="Programming Languages";
    main.appendChild(v);
    v.appendChild(document.createElement("hr"));
    var v3=document.createElement("ul");
    v3.textContent=u.lang1;
    main.appendChild(v3); 
    var v4=document.createElement("ul");
    v4.textContent=u.lang2;
    main.appendChild(v4); 


   
    }

  function other_skills(m){
    var d1=document.createElement("div");
    main.appendChild(d1);
    var l2=document.createElement("h4");
    l2.textContent="OtherSkills";
    d1.appendChild(l2);
    l2.appendChild(document.createElement("hr"));

    var ul = document.createElement("ul");
    for (var i = 0; i < m.skill.length; i++){
       var li =document.createElement("li");
       li.textContent=m.skill[i];
       ul.appendChild(li);
    }
   d1.appendChild(ul);

  }
