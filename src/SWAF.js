/***
	SWAF Markup language 
	It is a simple markup language 
	used to write cross platform mobile web application 
	the elements on this markup language are suitable for touch devices 
	and the elements contain touch events 
	
	Author: Ezzat harky
	contact:
			Twitter    @ezzat92
			facebook  /ezzat.harky
			GitHub   /Ezzat92
			mail: ezzat.harky@outlook.com
			
	it is my bachelor thesis on 
	Computer Science department of
	Soran University www.soran.edu.iq 
***/
var UI={
	NEWLINE:function(vp,value){
		if(value>0){
			for(var i=0;i<value;i++){
				var el=document.createElement("br");
				vp.appendChild(el);
			}
		}
		else{
			var el=document.createElement("br");
			vp.appendChild(el);
		}
	return 0;
	},
	TITLE:function(value){
		var v=value;
		value=(value==null || value=="" || value== undefined)? value="Untitled Project":value;
		if(value != null && value != "" && value != undefined){
			var el=document.createElement('title');
			var txt=document.createTextNode(value);
			el.appendChild(txt);
			return document.getElementsByTagName('head')[0].appendChild(el);
		}
	},
	ICON:function(src){
		if(src != null && src != "" && src != undefined){
			var el=document.createElement("link");
			el.type = 'image/x-icon';
			el.rel = 'shortcut icon';
			el.href = src;
			return document.getElementsByTagName('head')[0].appendChild(el);
		}
	},
	IMPORT:function(src){
	if(src != null && src != "" && src != undefined){
			var el=document.createElement("script");
			el.language="JavaScript";
			el.setAttribute("src",src);
			return document.getElementsByTagName('head')[0].appendChild(el);
		}
	},
	 BTN:function(bgcolor,color,etype,ehref,id,layout,value,vp,theme,x,y,w,h,radus,start,end,move,cancel){
			var el;
			etype=(etype==null || etype=="" || etype== undefined)? etype="normal":etype;
			ehref=(ehref==null || ehref=="" || ehref== undefined)? ehref="#":ehref;
			value=(value==null || value=="" || value== undefined)? value="Button":value;
			if(etype.toUpperCase()=="NORMAL" || etype.toUpperCase()=="N"){
				el=document.createElement("input");
				el.setAttribute("type","button");
				el.setAttribute("value",value);
				if(theme.toUpperCase()!=""){
					el.setAttribute("class","SWAF_N_BTN_THEME_"+theme.toUpperCase());
				}
				else{
					if(color!= null || color != "" || color != undefined){
						el.setAttribute("class","SWAF_N_BTN");
						el.style.color=color;
					}
					if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
						el.setAttribute("class","SWAF_N_BTN");
						el.style.backgroundColor=bgcolor;
					}
				}
			} 
			else if(etype.toUpperCase()=="ANCHRO" || etype.toUpperCase()=="A"){
				el=document.createElement("a");
				el.setAttribute("href",ehref);
				var txt=document.createTextNode(value);
				el.appendChild(txt);
				if(theme.toUpperCase()!=""){
					el.setAttribute("class","SWAF_A_BTN_THEME_"+theme.toUpperCase());
				}
				else{
					if(color!= null || color != "" || color != undefined){
						el.setAttribute("class","SWAF_A_BTN");
						el.style.color=color;
					}
					if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
						el.setAttribute("class","SWAF_A_BTN");
						el.style.backgroundColor=bgcolor;
					}
				}
			}
			switch(layout.toUpperCase()){
				case "BLOCKLINE":{el.style.width="100%";break;}
				case "FIXED":{el.style.position="fixed";break;}
				case "STATIC":{el.style.position="Static";break;}
				case "RELATIVE":{el.style.position="Relative";break;}
				case "ABSOLUTE":{el.style.position="Absolute";break;}
				default:{el.style.position="Relative";break;}
			}	
			id=(id==null || id=="" || id==undefined)?id="":el.setAttribute("id",id);
			radus=(radus==null || radus=="" || radus==undefined)?el.style.borderRadius="0px":el.style.borderRadius=radus+"px";
			x=(x==null || x=="" || x==undefined)?x=0:el.style.left=x+"px";
			y=(y==null || y=="" || y==undefined)?y=0:el.style.top=y+"px";
			if(etype=="normal" || etype=="n"){
				w=(w==null || w=="" || w==undefined)?w=0:el.style.width=w*2.21+"px";
				h=(h==null || h=="" || h==undefined)?h=0:el.style.height=h*2.21+"px";
			}
			else if(etype=="anchro" || etype=="a"){
				w=(w==null || w=="" || w==undefined)?w="1.25rem":w;
				h=(h==null || h=="" || h==undefined)?h=0:el.style.padding=h+"px "+w+"px";
			}
			start=(start==null || start=="" || start== undefined)? start="":start=start;
			end=(end==null || end=="" || end== undefined)? end="":end=end;
			move=(move==null || move=="" || move== undefined)? move="":move=move;
			cancel=(cancel==null || cancel=="" || cancel== undefined)? cancel="":cancel=cancel;
			if(start !=""){
				el.addEventListener('touchstart',function(e){
					eval(start)
					e.preventDefault();
				},false);
			}
			if(end !=""){
				el.addEventListener('touchend',function(e){
					eval(end)
					e.preventDefault();
				},false);
			}
			if(move !=""){
				el.addEventListener('touchmove',function(e){
					eval(move)
					e.preventDefault();
				},false);
			}
			if(cancel !=""){
				el.addEventListener('touchcancel',function(e){
					eval(cancel)
					e.preventDefault();
				},false);
			}
			return vp.appendChild(el);
	},
	TXT:function(bgcolor,color,colom,rows,plch,etype,id,layout,value,vp,theme,x,y,w,h,radus,start,end,move,cancel){
			var el;
			etype=(etype==null || etype=="" || etype== undefined)? etype="NORMAL":etype;
			if(etype.toUpperCase()=="SEARCH" || etype.toUpperCase()=="S"){
				el=document.createElement("input");
				el.setAttribute("type","search");
				el.setAttribute("value",value);
				el.setAttribute("placeholder",plch);
				if(theme.toUpperCase()!=""){
					el.setAttribute("class","SWAF_TEXT_SEARCH_THEME_"+theme.toUpperCase());
				}
				else{
					if(color!= null || color != "" || color != undefined){
						el.setAttribute("class","SWAF_TEXT_SEARCH");
						el.style.color=color;
					}
					if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
						el.setAttribute("class","SWAF_TEXT_SEARCH");
						el.style.backgroundColor=bgcolor;
					}
				}
			} 
			else if(etype.toUpperCase()=="NORMAL" || etype.toUpperCase()=="N"){
				el=document.createElement("input");
				el.setAttribute("type","text");
				el.setAttribute("value",value);
				el.setAttribute("placeholder",plch);
				if(theme.toUpperCase()!=""){
					el.setAttribute("class","SWAF_TEXT_NORMAL_THEME_"+theme.toUpperCase());
				}
				else{
					if(color!= null || color != "" || color != undefined){
						el.setAttribute("class","SWAF_TEXT_NORMAL");
						el.style.color=color;
					}
					if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
						el.setAttribute("class","SWAF_TEXT_NORMAL");
						el.style.backgroundColor=bgcolor;
					}
				}
			}
			else if(etype.toUpperCase()=="PASSWORD" || etype.toUpperCase()=="P"){
				el=document.createElement("input");
				el.setAttribute("type","password");
				el.setAttribute("value",value);
				el.setAttribute("placeholder",plch);
				if(theme.toUpperCase()!=""){
					el.setAttribute("class","SWAF_TEXT_NORMAL_THEME_"+theme.toUpperCase());
				}
				else{
					if(color!= null || color != "" || color != undefined){
						el.setAttribute("class","SWAF_TEXT_NORMAL");
						el.style.color=color;
					}
					if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
						el.setAttribute("class","SWAF_TEXT_NORMAL");
						el.style.backgroundColor=bgcolor;
					}
				}
			}
			
			else if(etype.toUpperCase()=="AREA" || etype.toUpperCase()=="A"){
				el=document.createElement("textarea");
				el.setAttribute("rows",rows);
				el.setAttribute("cols",colom);
				el.setAttribute("placeholder",plch);
				if(theme.toUpperCase()!=""){
					el.setAttribute("class","SWAF_TEXT_AREA_THEME_"+theme.toUpperCase());
				}
				else{
					if(color!= null || color != "" || color != undefined){
						el.setAttribute("class","SWAF_TEXT_AREA");
						el.style.color=color;
					}
					if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
						el.setAttribute("class","SWAF_TEXT_AREA");
						el.style.backgroundColor=bgcolor;
					}
				}
			}
			switch(layout.toUpperCase()){
				case "BLOCKLINE":{el.style.width="100%";break;}
				case "FIXED":{el.style.position="fixed";break;}
				case "STATIC":{el.style.position="Static";break;}
				case "RELATIVE":{el.style.position="Relative";break;}
				case "ABSOLUTE":{el.style.position="Absolute";break;}
				default:{el.style.position="Relative";break;}
			}	
			id=(id==null || id=="" || id==undefined)?id="":el.setAttribute("id",id);
			radus=(radus==null || radus=="" || radus==undefined)?el.style.borderRadius="0px":el.style.borderRadius=radus+"px";
			x=(x==null || x=="" || x==undefined)?x=0:el.style.left=x+"px";
			y=(y==null || y=="" || y==undefined)?y=0:el.style.top=y+"px";
			w=(w==null || w=="" || w==undefined)?w=0:el.style.width=w+"px";
			h=(h==null || h=="" || h==undefined)?h=0:el.style.height=h+"px";
			start=(start==null || start=="" || start== undefined)? start="":start=start;
			end=(end==null || end=="" || end== undefined)? end="":end=end;
			move=(move==null || move=="" || move== undefined)? move="":move=move;
			cancel=(cancel==null || cancel=="" || cancel== undefined)? cancel="":cancel=cancel;
			if(start !=""){
				el.addEventListener('touchstart',function(e){
					eval(start)
					e.preventDefault();
				},false);
			}
			if(end !=""){
				el.addEventListener('touchend',function(e){
					eval(end)
					e.preventDefault();
				},false);
			}
			if(move !=""){
				el.addEventListener('touchmove',function(e){
					eval(move)
					e.preventDefault();
				},false);
			}
			if(cancel !=""){
				el.addEventListener('touchcancel',function(e){
					eval(cancel)
					e.preventDefault();
				},false);
			}
			return vp.appendChild(el);
	},
	NOTFICATION:function(theme,bgcolor,color,vp,value,layout,id,radus,x,y,w,h,start,end,move,cancel){
		el=document.createElement("span");
		var txt=document.createTextNode(value);
		el.appendChild(txt);
		switch(layout.toUpperCase()){
			case "BLOCKLINE":{el.style.width="100%";break;}
			case "FIXED":{el.style.position="fixed";break;}
			case "STATIC":{el.style.position="Static";break;}
			case "RELATIVE":{el.style.position="Relative";break;}
			case "ABSOLUTE":{el.style.position="Absolute";break;}
			default:{el.style.position="Relative";break;}
		}
		if(theme.toUpperCase()!=""){
			el.setAttribute("class","SWAF_NTF_THEME_"+theme.toUpperCase());
		}
		else{
			if(color!= null || color != "" || color != undefined){
				el.setAttribute("class","SWAF_NTF");
				el.style.color=color;
			}
			if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
				el.setAttribute("class","SWAF_NTF");
				el.style.backgroundColor=bgcolor;
			}
					
		}
		id=(id==null || id=="" || id==undefined)?id="":el.setAttribute("id",id);
		radus=(radus==null || radus=="" || radus==undefined)?el.style.borderRadius="0px":el.style.borderRadius=radus+"px";
		x=(x==null || x=="" || x==undefined)?x=0:el.style.left=x+"px";
		y=(y==null || y=="" || y==undefined)?y=0:el.style.top=y+"px";
		w=(w==null || w=="" || w==undefined)?w=0:el.style.width=w+"px";
		h=(h==null || h=="" || h==undefined)?h=0:el.style.height=h+"px";
			start=(start==null || start=="" || start== undefined)? start="":start=start;
			end=(end==null || end=="" || end== undefined)? end="":end=end;
			move=(move==null || move=="" || move== undefined)? move="":move=move;
			cancel=(cancel==null || cancel=="" || cancel== undefined)? cancel="":cancel=cancel;
			if(start !=""){
				el.addEventListener('touchstart',function(e){
					eval(start)
					e.preventDefault();
				},false);
			}
			if(end !=""){
				el.addEventListener('touchend',function(e){
					eval(end)
					e.preventDefault();
				},false);
			}
			if(move !=""){
				el.addEventListener('touchmove',function(e){
					eval(move)
					e.preventDefault();
				},false);
			}
			if(cancel !=""){
				el.addEventListener('touchcancel',function(e){
					eval(cancel)
					e.preventDefault();
				},false);
			}
		return vp.appendChild(el);
		
	},
	SLIDER:function(vp,layout,theme,id,x,y,w,h,align,value,start,end,move,cancel){
		var el;
		el=document.createElement("input");
		el.setAttribute("type","range");
		el.value=value;
		//set layout to element
			switch(layout.toUpperCase()){
			case "BLOCKLINE":{el.style.width="100%";break;}
			case "FIXED":{el.style.position="fixed";break;}
			case "STATIC":{el.style.position="Static";break;}
			case "RELATIVE":{el.style.position="Relative";break;}
			case "ABSOLUTE":{el.style.position="Absolute";break;}
			default:{el.style.position="Relative";break;}
		}	
		if(theme.toUpperCase()!=""){
			if(align.toUpperCase()=="V" || align.toUpperCase()=="VERTICAL"){
				el.setAttribute("class","SWAF_SLIDER_THEME_"+theme.toUpperCase()+"_V");
			}
			else{
				el.setAttribute("class","SWAF_SLIDER_THEME_"+theme.toUpperCase()+"_H");
			}
		}
		else{
			if(align.toUpperCase()=="V" || align.toUpperCase()=="VERTICAL"){
				el.setAttribute("class","SWAF_SLIDER_V");
			}
			else {
				el.setAttribute("class","SWAF_SLIDER_H");
			}
		}
		id=(id==null || id=="" || id==undefined)?id="":el.setAttribute("id",id);
		x=(x==null || x=="" || x==undefined)?x=0:el.style.left=x+"px";
		y=(y==null || y=="" || y==undefined)?y=0:el.style.top=y+"px";
		w=(w==null || w=="" || w==undefined)?w=0:el.style.width=w+"px";
		h=(h==null || h=="" || h==undefined)?h=0:el.style.height=h+"px";
			start=(start==null || start=="" || start== undefined)? start="":start=start;
			end=(end==null || end=="" || end== undefined)? end="":end=end;
			move=(move==null || move=="" || move== undefined)? move="":move=move;
			cancel=(cancel==null || cancel=="" || cancel== undefined)? cancel="":cancel=cancel;
			if(start !=""){
				el.addEventListener('touchstart',function(e){
					eval(start)
					e.preventDefault();
				},false);
			}
			if(end !=""){
				el.addEventListener('touchend',function(e){
					eval(end)
					e.preventDefault();
				},false);
			}
			if(move !=""){
				el.addEventListener('touchmove',function(e){
					eval(move)
					e.preventDefault();
				},false);
			}
			if(cancel !=""){
				el.addEventListener('touchcancel',function(e){
					eval(cancel)
					e.preventDefault();
				},false);
			}
		return vp.appendChild(el);
	},
	CHECKBOX:function(bgcolor,color,vp,layout,theme,id,x,y,value,start,end,move,cancel){
		var el;var chb;var div;
		el=document.createElement("lable");
		chb=document.createElement("input");
		chb.setAttribute("type","checkbox");
		div=document.createElement("div");
		if(theme.toUpperCase()!=""){
			el.setAttribute("class","SWAF_CHECKBOX_COVER_THEME_"+theme.toUpperCase());
			div.setAttribute("class","SWAF_CHECKBOX_CORE_THEME_"+theme.toUpperCase());
		}
		else{
			if(color!= null || color != "" || color != undefined){
				el.setAttribute("class","SWAF_CHECKBOX_COVER");
				div.setAttribute("class","SWAF_CHECKBOX_CORE");
				el.style.color=color;
				chb.style.color=color;
				div.style.color=color;
			}
			if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
				el.setAttribute("class","SWAF_CHECKBOX_COVER");
			div.setAttribute("class","SWAF_CHECKBOX_CORE");
				el.style.backgroundColor=bgcolor;
				chb.style.backgroundColor=bgcolor;
				div.style.backgroundColor=bgcolor;
			}
					
		}
		el.appendChild(chb);
		el.appendChild(div);
		var txt=document.createTextNode("   "+value);
		el.appendChild(txt);
		switch(layout.toUpperCase()){
			case "BLOCKLINE":{el.style.width="100%";break;}
			case "FIXED":{el.style.position="fixed";break;}
			case "STATIC":{el.style.position="Static";break;}
			case "RELATIVE":{el.style.position="Relative";break;}
			case "ABSOLUTE":{el.style.position="Absolute";break;}
			default:{el.style.position="Relative";break;}
		}	
		id=(id==null || id=="" || id==undefined)?id="":chb.setAttribute("id",id);
		x=(x==null || x=="" || x==undefined)?x=0:el.style.left=x+"px";
		y=(y==null || y=="" || y==undefined)?y=0:el.style.top=y+"px";
			start=(start==null || start=="" || start== undefined)? start="":start=start;
			end=(end==null || end=="" || end== undefined)? end="":end=end;
			move=(move==null || move=="" || move== undefined)? move="":move=move;
			cancel=(cancel==null || cancel=="" || cancel== undefined)? cancel="":cancel=cancel;
			if(start !=""){
				el.addEventListener('touchstart',function(e){
					eval(start)
					e.preventDefault();
				},false);
			}
			if(end !=""){
				el.addEventListener('touchend',function(e){
					eval(end)
					e.preventDefault();
				},false);
			}
			if(move !=""){
				el.addEventListener('touchmove',function(e){
					eval(move)
					e.preventDefault();
				},false);
			}
			if(cancel !=""){
				el.addEventListener('touchcancel',function(e){
					eval(cancel)
					e.preventDefault();
				},false);
			}
		return vp.appendChild(el);
		
	},
	RADIO:function(bgcolor,color,vp,layout,theme,id,x,y,value,gname,start,end,move,cancel){
		var el;var chb;var div;
		el=document.createElement("lable");
		chb=document.createElement("input");
		chb.setAttribute("type","radio");
		chb.setAttribute("name",gname);
		div=document.createElement("div");
		if(theme.toUpperCase()!=""){
			el.setAttribute("class","SWAF_RADIO_COVER_THEME_"+theme.toUpperCase());
			div.setAttribute("class","SWAF_RADIO_CORE_THEME_"+theme.toUpperCase());
		}
		else{
			if(color!= null || color != "" || color != undefined){
				el.setAttribute("class","SWAF_RADIO_COVER");
				div.setAttribute("class","SWAF_RADIO_CORE");
				el.style.color=color;
				chb.style.color=color;
			}
			if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
				el.setAttribute("class","SWAF_RADIO_COVER");
				div.setAttribute("class","SWAF_RADIO_CORE");
				el.style.backgroundColor=bgcolor;
				chb.style.backgroundColor=bgcolor;
			}
					
		}
		el.appendChild(chb);
		el.appendChild(div);
		var txt=document.createTextNode(" "+value);
		el.appendChild(txt);
		switch(layout.toUpperCase()){
			case "BLOCKLINE":{el.style.width="100%";break;}
			case "FIXED":{el.style.position="fixed";break;}
			case "STATIC":{el.style.position="Static";break;}
			case "RELATIVE":{el.style.position="Relative";break;}
			case "ABSOLUTE":{el.style.position="Absolute";break;}
			default:{el.style.position="Relative";break;}
		}	
		id=(id==null || id=="" || id==undefined)?id="":el.setAttribute("id",id);
		x=(x==null || x=="" || x==undefined)?x=0:el.style.left=x+"px";
		y=(y==null || y=="" || y==undefined)?y=0:el.style.top=y+"px";
			start=(start==null || start=="" || start== undefined)? start="":start=start;
			end=(end==null || end=="" || end== undefined)? end="":end=end;
			move=(move==null || move=="" || move== undefined)? move="":move=move;
			cancel=(cancel==null || cancel=="" || cancel== undefined)? cancel="":cancel=cancel;
			if(start !=""){
				el.addEventListener('touchstart',function(e){
					eval(start)
					e.preventDefault();
				},false);
			}
			if(end !=""){
				el.addEventListener('touchend',function(e){
					eval(end)
					e.preventDefault();
				},false);
			}
			if(move !=""){
				el.addEventListener('touchmove',function(e){
					eval(move)
					e.preventDefault();
				},false);
			}
			if(cancel !=""){
				el.addEventListener('touchcancel',function(e){
					eval(cancel)
					e.preventDefault();
				},false);
			}
		return vp.appendChild(el);
	},
	SWITCH:function(vp,layout,theme,id,x,y,align,status,start,end,move,cancel){
		var el;var chb;var div;
		el=document.createElement("lable");
		chb=document.createElement("input");
		chb.setAttribute("type","checkbox");
		div=document.createElement("div");
		if(status.toUpperCase()=="ON")
		{
			chb.checked = true;
		}
		else{
		chb.checked = false;
		}
		if(theme.toUpperCase()!=""){
			if(align.toUpperCase()=="V" || align.toUpperCase()=="VERTICAL"){
				el.setAttribute("class","SWAF_SWITCH_COVER_THEME_"+theme.toUpperCase()+"_V");
				div.setAttribute("class","SWAF_SWITCH_TOGLE_THEME_"+theme.toUpperCase()+"_V");
				chb.setAttribute("class","SWAF_SWITCH_CORE_THEME_"+theme.toUpperCase()+"_V");
			}
			else {
				el.setAttribute("class","SWAF_SWITCH_COVER_THEME_"+theme.toUpperCase()+"_H");
				div.setAttribute("class","SWAF_SWITCH_TOGLE_THEME_"+theme.toUpperCase()+"_H");
				chb.setAttribute("class","SWAF_SWITCH_CORE_THEME_"+theme.toUpperCase()+"_H");
			}
		}
		else{
			if(align.toUpperCase()=="V" || align.toUpperCase()=="VERTICAL"){
				el.setAttribute("class","SWAF_SWITCH_COVER_V");
				div.setAttribute("class","SWAF_SWITCH_TOGLE_V");
				chb.setAttribute("class","SWAF_SWITCH_CORE_V");
			}
			else{
				el.setAttribute("class","SWAF_SWITCH_COVER_H");
				div.setAttribute("class","SWAF_SWITCH_TOGLE_H");
				chb.setAttribute("class","SWAF_SWITCH_CORE_H");
			}
		}	
		el.appendChild(chb);
		el.appendChild(div);
		switch(layout.toUpperCase()){
			case "BLOCKLINE":{el.style.left="0px";break;}
			case "FIXED":{el.style.position="fixed";break;}
			case "STATIC":{el.style.position="Static";break;}
			case "RELATIVE":{el.style.position="Relative";break;}
			case "ABSOLUTE":{el.style.position="Absolute";break;}
			default:{el.style.position="Relative";break;}
		}	
		id=(id==null || id=="" || id==undefined)?id="":chb.setAttribute("id",id);
		x=(x==null || x=="" || x==undefined)?x=0:el.style.left=x+"px";
		y=(y==null || y=="" || y==undefined)?y=0:el.style.top=y+"px";
			start=(start==null || start=="" || start== undefined)? start="":start=start;
			end=(end==null || end=="" || end== undefined)? end="":end=end;
			move=(move==null || move=="" || move== undefined)? move="":move=move;
			cancel=(cancel==null || cancel=="" || cancel== undefined)? cancel="":cancel=cancel;
			if(start !=""){
				el.addEventListener('touchstart',function(e){
					eval(start)
					e.preventDefault();
				},false);
			}
			if(end !=""){
				el.addEventListener('touchend',function(e){
					eval(end)
					e.preventDefault();
				},false);
			}
			if(move !=""){
				el.addEventListener('touchmove',function(e){
					eval(move)
					e.preventDefault();
				},false);
			}
			if(cancel !=""){
				el.addEventListener('touchcancel',function(e){
					eval(cancel)
					e.preventDefault();
				},false);
			}
		return vp.appendChild(el);
	},
	HEADER:function(bgcolor,color,vp,theme,value,layout,id,radus,x,y,w,h,txtp,start,end,move,cancel){
		var el=document.createElement("div");
		var el2=document.createElement("div");
		var el3=document.createElement("h1");
		var txt=document.createTextNode(value);
		el3.appendChild(txt);
		el2.appendChild(el3);
		el.appendChild(el2);
		if(theme.toUpperCase()!=""){
			el.setAttribute("class","SWAF_HED_COVER_THEME_"+theme.toUpperCase());
			el2.setAttribute("class","SWAF_HED_ITEM_THEME_"+theme.toUpperCase());
			el3.setAttribute("class","SWAF_HED_CORE_THEME_"+theme.toUpperCase());
		}
		else{
			if(color!= null || color != "" || color != undefined){
				el.setAttribute("class","SWAF_HED_COVER");
				el2.setAttribute("class","SWAF_HED_ITEM");
			    el3.setAttribute("class","SWAF_HED_CORE");
				el3.style.color=color;
			}
			if(bgcolor != null || bgcolor != "" || bgcolor != undefined){
				el.setAttribute("class","SWAF_HED_COVER");
				el2.setAttribute("class","SWAF_HED_ITEM");
				el3.setAttribute("class","SWAF_HED_CORE");
				el.style.backgroundColor=bgcolor;
			}
		}
		el.style.position="Relative";
		if(txtp.toUpperCase()=="CENTER"){
			el2.style.left="50%";
		}
		else{
			el2.style.left="0px";
		}
		id=(id==null || id=="" || id==undefined)?id="":el.setAttribute("id",id);
		radus=(radus==null || radus=="" || radus==undefined)?el.style.borderRadius="0px":el.style.borderRadius=radus+"px";
		x=(x==null || x=="" || x==undefined)?x=0:el.style.left=x+"px";
		y=(y==null || y=="" || y==undefined)?y=0:el.style.top=y+"px";
		w=(w==null || w=="" || w==undefined)?w=0:el.style.width=w+"px";
		h=(h==null || h=="" || h==undefined)?h=0:el.style.height=h+"px";
			start=(start==null || start=="" || start== undefined)? start="":start=start;
			end=(end==null || end=="" || end== undefined)? end="":end=end;
			move=(move==null || move=="" || move== undefined)? move="":move=move;
			cancel=(cancel==null || cancel=="" || cancel== undefined)? cancel="":cancel=cancel;
			if(start !=""){
				el.addEventListener('touchstart',function(e){
					eval(start)
					e.preventDefault();
				},false);
			}
			if(end !=""){
				el.addEventListener('touchend',function(e){
					eval(end)
					e.preventDefault();
				},false);
			}
			if(move !=""){
				el.addEventListener('touchmove',function(e){
					eval(move)
					e.preventDefault();
				},false);
			}
			if(cancel !=""){
				el.addEventListener('touchcancel',function(e){
					eval(cancel)
					e.preventDefault();
				},false);
			}
		return vp.appendChild(el);
	}
}
function setStyle() {
	var style=document.createElement('style');
	var BTN=[
			".SWAF_N_BTN,.SWAF_A_BTN{display: inline-block;",
			"vertical-align:top;-moz-box-sizing: border-box;",
			"box-sizing:border-box;background-clip: padding-box;",
			"margin:0;font:inherit;background:transparent;cursor:default;",
			"-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;",
			"user-select: none;text-overflow: ellipsis;white-space: nowrap;",
			"overflow:hidden;text-decoration: none;",
			"padding: 0 1.25rem;font-size: 16px;line-height: 3rem;",
			"letter-spacing: 1px;text-shadow: 0 1px #fff;",
			"border: 1px solid;box-shadow: inset 0 1px #fff;",
			"border-radius: 6px;}.SWAF_N_BTN:active,.SWAF_A_BTN:",
			"active{border: 1px solid ;box-shadow: inset 0 1px rgba(0,0,0,0.1);}"
			];
	var SLIDER=[
			".SWAF_SLIDER_H, .SWAF_SLIDER_V{padding:0;margin:0;font:inherit;",
			"color:inherit;background:transparent;border:none;-moz-box-sizing:",
			"border-box;box-sizing:border-box;background-clip:padding-box;",
			"vertical-align:top;outline:none;-webkit-appearance:none;}",
			".SWAF_SLIDER_H::-moz-range-thumb,.SWAF_SLIDER_V::-moz-range-thumb{cursor:pointer;}",
			".SWAF_SLIDER_H::-webkit-slider-thumb,",
			".SWAF_SLIDER_V::-webkit-slider-thumb{cursor:pointer;-webkit-appearance:none;}",
			".SWAF_SLIDER_V{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);",
			"-ms-transform:rotate(90deg);transform:rotate(90deg);}",
			".SWAF_SLIDER_H,.SWAF_SLIDER_V{background-color:transparent;",
			"border:1px solid;height:1rem;border-radius:30px;}",
			".SWAF_SLIDER_H::-moz-range-track ,.SWAF_SLIDER_V::-moz-range-track{",
			"background-color:transparent;height:1rem;border-radius:30px;}",
			".SWAF_SLIDER_H::-webkit-slider-thumb,",
			".SWAF_SLIDER_V::-webkit-slider-thumb{height:3rem;width:2rem;background-color:transparent;",
			"border: 1px solid;border-radius:6px;box-shadow: inset 0 1px #fff;}",
			".SWAF_SLIDER_H::-moz-range-thumb ,",
			".SWAF_SLIDER_V::-moz-range-thumb{height: 3rem;width: 2rem;background-color:transparent;",
			"border: 1px solid;border-radius: 6px;box-shadow: inset 0 1px #fff;}"
			];
	var NTF=".SWAF_NTF{padding: 0.15em 0.5em 0.2em;border-radius: 2px;}";
	var CHECKBOX=[
			"input[type='checkbox']{position:absolute;overflow:hidden;padding:0;",
			"border:0;opacity:0.001;z-index:1;vertical-align:top;outline:none;}",
			".SWAF_CHECKBOX_CORE{-moz-box-sizing:border-box;box-sizing:border-box;",
			"background-clip:padding-box;position:relative;display:inline-block;",
			"vertical-align:top;cursor:default;-webkit-user-select:none;",
			"-moz-user-select:none;-ms-user-select:none;user-select:none;}",
			".SWAF_CHECKBOX_COVER{font: 400 20px 'Source Sans',helvetica,arial,sans-serif;",
			"display: inline-block;vertical-align: top;cursor: default;",
			"-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}",
			".SWAF_CHECKBOX_CORE:before,.SWAF_CHECKBOX_CORE:after{content:'';position:absolute;}",
			".SWAF_CHECKBOX_CORE:before{-moz-box-sizing:border-box;box-sizing:border-box;background-clip:padding-box;}",
			".SWAF_CHECKBOX_CORE{height: 2rem;}input[type='checkbox']{height:2rem;width:2rem;",
			"margin-top:0;margin-right:-2rem;margin-bottom:-2rem;margin-left:0;}",
			".SWAF_CHECKBOX_COVER{line-height:2rem;}.SWAF_CHECKBOX_CORE{width: 2rem;height: 2rem;}",
			"input[type='checkbox']:checked + .SWAF_CHECKBOX_CORE:after{opacity:1;}",
			".SWAF_CHECKBOX_CORE:before{width:2rem;height:2rem;border:1px solid;border-radius:3px;",
			"box-shadow: inset 0 1px #fff;}.SWAF_CHECKBOX_CORE:after{top:1px;left:2px;opacity:0;",
			"width:28px;height:11px;background:transparent;border: 7px solid;border-width:7px;",
			"border-top:none;border-right:none;border-radius:2px;-webkit-transform:rotate(-50deg);",
			"-ms-transform:rotate(-50deg);transform:rotate(-50deg);}",
			"input[type='checkbox']:active + .SWAF_CHECKBOX_CORE:before",
			"{box-shadow: inset 0 1px rgba(0,0,0,0.1);}"
			];
	var SWITCH=[
			".SWAF_SWITCH_COVER_H,.SWAF_SWITCH_COVER_V{position:relative;",
			"display:inline-block;vertical-align:top;-moz-box-sizing:border-box;box-sizing:border-box;",
			"background-clip:padding-box;}.SWAF_SWITCH_CORE_H,.SWAF_SWITCH_CORE_V",
			"{position:absolute;overflow:hidden;padding:0;border:0;opacity:0.001;",
			"z-index:1;vertical-align:top;outline:none;}",
			".SWAF_SWITCH_TOGLE_H ,.SWAF_SWITCH_TOGLE_V{position:relative;",
			"display:inline-block;vertical-align:top;-moz-box-sizing:border-box;",
			"box-sizing:border-box;background-clip:padding-box;",
			"padding:0;margin:0;font:inherit;color:inherit;background:transparent;",
			"border:none;cursor:default;-webkit-user-select:none;-moz-user-select:none",
			";-ms-user-select:none;user-select:none;}",
			".SWAF_SWITCH_TOGLE_H:after,.SWAF_SWITCH_TOGLE_V:before,",
			".SWAF_SWITCH_TOGLE_H:before,.SWAF_SWITCH_TOGLE_V:after",
			"{content:'';position:absolute;z-index:-1;-moz-box-sizing:border-box;",
			"box-sizing:border-box;background-clip:padding-box;}",
			".SWAF_SWITCH_COVER_H ,.SWAF_SWITCH_COVER_V{font-size: 16px;",
			"padding: 0 1.25rem;border-radius: 6px;border: 1px solid ;overflow: hidden;width: 6rem;}",
			".SWAF_SWITCH_TOGLE_H:after ,.SWAF_SWITCH_TOGLE_V:before,",
			".SWAF_SWITCH_TOGLE_H:before,.SWAF_SWITCH_TOGLE_V:after{top:-1px;width:5rem;}",
			".SWAF_SWITCH_TOGLE_H:before ,.SWAF_SWITCH_TOGLE_V:before ",
			"{content:'ON';right:1rem;padding-left:1.5rem;}",
			".SWAF_SWITCH_TOGLE_H,.SWAF_SWITCH_TOGLE_V{line-height:3rem;",
			"height:3rem;width:2rem;border-radius:6px;border:1px solid ;",
			"margin-left:-1.3rem;margin-bottom:-1px;margin-top:-1px;",
			"box-shadow: inset 0 1px #fff;-webkit-transition:margin-left 0.05s ease-in-out;",
			"transition:margin-left 0.05s ease-in-out;}",
			".SWAF_SWITCH_TOGLE_H:after ,.SWAF_SWITCH_TOGLE_V:after{content:'OFF';",
			"left:1rem;padding-left:2rem;}.SWAF_SWITCH_CORE_H:checked + .SWAF_SWITCH_TOGLE_H ,",
			".SWAF_SWITCH_CORE_V:checked + .SWAF_SWITCH_TOGLE_V{margin-left: 2.7rem;}",
			".SWAF_SWITCH_COVER_V{transform: rotate(90deg);}"
			];
	var RADIO=[
			"input[type='radio']{position:absolute;overflow:hidden;padding:0;",
			"border:0;opacity:0.001;z-index:1;vertical-align:top;outline:none;}",
			".SWAF_RADIO_CORE{-moz-box-sizing:border-box;box-sizing:border-box;",
			"background-clip:padding-box;position:relative;display:inline-block;vertical-align:top;cursor:default;",
			"-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",
			".SWAF_RADIO_COVER{position:relative;display:inline-block;vertical-align:top;cursor:default;",
			"-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",
			".SWAF_RADIO_CORE:before,.SWAF_RADIO_CORE:after{content:'';position:absolute;border-radius:100%;}",
			".SWAF_RADIO_CORE:after{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);",
			"-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);}",
			".SWAF_RADIO_CORE:before{-moz-box-sizing:border-box;box-sizing:border-box;background-clip:padding-box;}",
			"input[type='radio']{height:1.875rem;width:1.875rem;margin-top:0;margin-right:-1.875rem;margin-bottom:-1.875rem;margin-left:0;}",
			"input[type='radio']:checked + .SWAF_RADIO_CORE:after {opacity:1;}",
			".SWAF_RADIO_COVER{font:400 20px 'Source Sans',helvetica,arial,sans-serif;color:#454545;line-height:1.875rem;}",
			".SWAF_RADIO_CORE:before{width:1.875rem;height:1.875rem;border:1px solid;",
			"box-shadow: inset 0 1px #fff;}.SWAF_RADIO_CORE{position:relative;width:1.875rem;height:1.875rem;}",
			".SWAF_RADIO_CORE:after{opacity:0;width:0.875rem;height:0.875rem;border:1px solid ;",
			"box-shadow: 0 1px rgba(255,255,255,0.5);-webkit-transform:none;-ms-transform:none;transform:none;",
			"top:7px;left:7px;}"
			];
	var HEADER=[
			".SWAF_HED_COVER{-moz-box-sizing:border-box;box-sizing:border-box;",
			"background-clip:padding-box;white-space:nowrap;overflow:hidden;word-spacing:0;padding:0;",
			"margin:0;font:inherit;color:inherit;background:transparent;border:none;cursor:default;",
			"-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",
			".SWAF_HED_ITEM{-moz-box-sizing:border-box;box-sizing:border-box;background-clip:padding-box;",
			"position:relative;display:inline-block;vertical-align:top;padding:0;margin:0;",
			"font:inherit;color:inherit;background:transparent;border:none;}",
			".SWAF_HED_CORE{padding:0;margin:0;font:inherit;color:inherit;background:transparent;border:none;",
			"text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}",
			".SWAF_HED_COVER{height:4.375rem;padding-left:1rem;padding-right:1rem;",
			"box-shadow: inset 0 -1px #9daca9, 0 1px #d6dcdb;}",
			".SWAF_HED_ITEM{margin:0;line-height:4.375rem;vertical-align:top;",
			"}.SWAF_HED_CORE{font-size: 1.3rem;font-weight: 400;}"
			];
	var TXT=[
			".SWAF_TEXT_SEARCH{padding:0;margin:0;font:inherit;color:inherit;",
			"background:transparent;border:none;-moz-box-sizing:border-box;box-sizing:border-box;",
			"background-clip:padding-box;vertical-align:top;outline:none;-webkit-appearance:none;}",
			"input[type='search']::-webkit-search-cancel-button{-webkit-appearance:none;}",
			".SWAF_TEXT_SEARCH{line-height:3rem;height:3rem;font-size:16px;border:1px solid;",
			"box-shadow:inset 0 1px 0 rgba(0,0,0,0.23);padding:0 0 0 2rem;border-radius:30px;",
			"background-image:url('imgs/search.svg');background-position:1rem center;",
			"background-repeat:no-repeat;background-size:16px;}.SWAF_TEXT_SEARCH::-webkit-search-cancel-button,",
			".SWAF_TEXT_SEARCH::-webkit-search-decoration{margin-right: 5px;}",
			".SWAF_TEXT_NORMAL{padding:0;margin:0;font:inherit;color:inherit;background:transparent;border:none;",
			"-moz-box-sizing:border-box;box-sizing:border-box;background-clip:padding-box;vertical-align:top;",
			"outline:none;}.SWAF_TEXT_NORMAL{line-height:3rem;font-size:16px;",
			"letter-spacing:1px;padding:0 1.25rem;border:1px solid;border-radius:6px;",
			"box-shadow:inset 0 1px rgba(0,0,0,0.1);vertical-align:top;}.SWAF_TEXT_AREA",
			"{-moz-box-sizing:border-box;box-sizing:border-box;background-clip:padding-box;",
			"padding:0;margin:0;font:inherit;color:inherit;background:transparent;border:none;",
			"vertical-align:top;resize:none;outline:none;}.SWAF_TEXT_AREA{padding:2rem;",
			"font-size:2.5rem;font-weight:400;border-radius:6px;line-height:3rem;border:1px solid;",
			"box-shadow:inset 0 1px rgba(0,0,0,0.1);letter-spacing:1px;}"
			];
  for(var i=0;i<BTN.length;i++){
		var parts=document.createTextNode(BTN[i]);
		style.appendChild(parts);
	}
	for(var i=0;i<TXT.length;i++){
		var parts=document.createTextNode(TXT[i]);
		style.appendChild(parts);
	}
	for(var i=0;i<HEADER.length;i++){
		var parts=document.createTextNode(HEADER[i]);
		style.appendChild(parts);
	}
	for(var i=0;i<RADIO.length;i++){
		var parts=document.createTextNode(RADIO[i]);
		style.appendChild(parts);
	}
	for(var i=0;i<SLIDER.length;i++){
		var parts=document.createTextNode(SLIDER[i]);
		style.appendChild(parts);
	}
	for(var i=0;i<SWITCH.length;i++){
		var parts=document.createTextNode(SWITCH[i]);
		style.appendChild(parts);
	}
	for(var i=0;i<CHECKBOX.length;i++){
		var parts=document.createTextNode(CHECKBOX[i]);
		style.appendChild(parts);
	}
	var parts=document.createTextNode(NTF);
	style.appendChild(parts);		
	return document.getElementsByTagName('head')[0].appendChild(style);
}
function createEls(){
var ui=UI;
	var EZZAT;var childs;var fschild;var thm;var layout;
	EZZAT=document.getElementsByTagName("EZZAT");
	childs=EZZAT[0].childNodes;
	fschild=EZZAT[0].firstChild;
	if(EZZAT[0].hasAttribute("THEME")){
		thm(EZZAT[0].getAttribute("THEME"))
	}
	else if(EZZAT[0].hasAttribute("T")){
		thm=(EZZAT[0].getAttribute("T"))
	}
	else{
		thm="";
		window.onload=setStyle();
	}
	layout=EZZAT[0].hasAttribute("P") || EZZAT[0].hasAttribute("POSITION")?EZZAT[0].getAttribute("P") || EZZAT[0].getAttribute("POSITION"):"";
	EZZAT[0].hasAttribute("TITLE") || EZZAT[0].hasAttribute("TLT")?ui.TITLE(EZZAT[0].getAttribute("TLT") || EZZAT[0].getAttribute("TITLE")):ui.TITLE("");
	EZZAT[0].hasAttribute("ICON") || EZZAT[0].hasAttribute("I")?ui.ICON(EZZAT[0].getAttribute("I") || EZZAT[0].getAttribute("ICON")):ui.ICON("");
	if(EZZAT[0].hasAttribute("JAVASCRIPTFILE")){
		ui.IMPORT(EZZAT[0].getAttribute("JAVASCRIPTFILE"))
	}
	else if(EZZAT[0].hasAttribute("JSF")){
		ui.IMPORT(EZZAT[0].getAttribute("JSF"))
	}
	else{
		ui.IMPORT("");
	}
	for(var i=0;i<100;i++){
		if(EZZAT[0].hasAttribute("JSF"+i) || EZZAT[0].hasAttribute("JAVASCRIPTFILE"+i)){
			ui.IMPORT(EZZAT[0].getAttribute("JSF"+i) || EZZAT[0].hasAttribute("JAVASCRIPTFILE"+i))
		}
	}
	for(var i=0;i<100;i++){
		if(EZZAT[0].hasAttribute("JSF"+i) || EZZAT[0].hasAttribute("JAVASCRIPTFILE"+i)){
			ui.IMPORT(EZZAT[0].getAttribute("JSF"+i) || EZZAT[0].getAttribute("JAVASCRIPTFILE"+i))
		}
	}
	for(nodeReader=0;nodeReader<childs.length;nodeReader++)
	{
		if(fschild.nodeType==1)
		{
			if(fschild.nodeName=="NL" || fschild.nodeName=="EZZAT.NEWLINE"){
				var parents=fschild.parentNode;
				var value=fschild.hasAttribute("V") || fschild.hasAttribute("VALUE")?fschild.getAttribute("VALUE") || fschild.getAttribute("V"):"";
				ui.NEWLINE(parents,value);
			}
			else if(fschild.nodeName=="BTN" || fschild.nodeName=="EZZAT.BUTTON"){
				var parents=fschild.parentNode;
				var value=fschild.hasAttribute("V") || fschild.hasAttribute("VALUE")?fschild.getAttribute("VALUE") || fschild.getAttribute("V"):"";
				var x=fschild.hasAttribute("X") || fschild.hasAttribute("LEFT")?fschild.getAttribute("X") || fschild.getAttribute("LEFT"):"";
				var y=fschild.hasAttribute("Y") || fschild.hasAttribute("TOP")?fschild.getAttribute("Y") || fschild.getAttribute("TOP"):"";
				var w=fschild.hasAttribute("W") || fschild.hasAttribute("WIDTH")?fschild.getAttribute("W") || fschild.getAttribute("WIDTH"):"";
				var h=fschild.hasAttribute("H") || fschild.hasAttribute("HEIGHT")?fschild.getAttribute("H") || fschild.getAttribute("HEIGHT"):"";
				var id=fschild.hasAttribute("ID") || fschild.hasAttribute("IDENTIFY")?fschild.getAttribute("ID") || fschild.getAttribute("IDENTIFY"):"";
				var type=fschild.hasAttribute("T") || fschild.hasAttribute("TYPE")?fschild.getAttribute("T") || fschild.getAttribute("TYPE"):"";
				var href=fschild.hasAttribute("REF") || fschild.hasAttribute("REFERENCE")?fschild.getAttribute("REF") || fschild.getAttribute("REFERENCE"):"";
				var radius=fschild.hasAttribute("R") || fschild.hasAttribute("RADIUS")?fschild.getAttribute("R") || fschild.getAttribute("RADIUS"):"";
				var bgcolor=fschild.hasAttribute("BGC") || fschild.hasAttribute("BACKGROUNDCOLOR")?fschild.getAttribute("BGC") || fschild.getAttribute("BACKGROUNDCOLOR"):"";
				var color=fschild.hasAttribute("C") || fschild.hasAttribute("COLOR")?fschild.getAttribute("C") || fschild.getAttribute("COLOR"):"";
				var start=fschild.hasAttribute("START") || fschild.hasAttribute("TOUCHSTART")?fschild.getAttribute("START") || fschild.getAttribute("TOUCHSTART"):"";
				var end=fschild.hasAttribute("END") || fschild.hasAttribute("TOUCHEND")?fschild.getAttribute("END") || fschild.getAttribute("TOUCHEND"):"";
				var move=fschild.hasAttribute("MOVE") || fschild.hasAttribute("TOUCHMOVE")?fschild.getAttribute("MOVE") || fschild.getAttribute("TOUCHMOVE"):"";
				var cancel=fschild.hasAttribute("CANCEL") || fschild.hasAttribute("TOUCHCANCEL")?fschild.getAttribute("CANCEL") || fschild.getAttribute("TOUCHCANCEL"):"";	
				ui.BTN(bgcolor,color,type,href,id,layout,value,parents,thm,x,y,w,h,radius,start,end,move,cancel);			
			}
			else if(fschild.nodeName=="TXT" || fschild.nodeName=="EZZAT.TEXTBOX"){
				var parents=fschild.parentNode;
				var value=fschild.hasAttribute("V") || fschild.hasAttribute("VALUE")?fschild.getAttribute("VALUE") || fschild.getAttribute("V"):"";
				var plch=fschild.hasAttribute("PLCH") || fschild.hasAttribute("PLACEHOLDER")?fschild.getAttribute("PLCH") || fschild.getAttribute("PLACEHOLDER"):"";
				var x=fschild.hasAttribute("X") || fschild.hasAttribute("LEFT")?fschild.getAttribute("X") || fschild.getAttribute("LEFT"):"";
				var y=fschild.hasAttribute("Y") || fschild.hasAttribute("TOP")?fschild.getAttribute("Y") || fschild.getAttribute("TOP"):"";
				var w=fschild.hasAttribute("W") || fschild.hasAttribute("WIDTH")?fschild.getAttribute("W") || fschild.getAttribute("WIDTH"):"";
				var h=fschild.hasAttribute("H") || fschild.hasAttribute("HEIGHT")?fschild.getAttribute("H") || fschild.getAttribute("HEIGHT"):"";
				var id=fschild.hasAttribute("ID") || fschild.hasAttribute("IDENTIFY")?fschild.getAttribute("ID") || fschild.getAttribute("IDENTIFY"):"";
				var radius=fschild.hasAttribute("R") || fschild.hasAttribute("RADIUS")?fschild.getAttribute("R") || fschild.getAttribute("RADIUS"):"";
				var type=fschild.hasAttribute("T") || fschild.hasAttribute("TYPE")?fschild.getAttribute("T") || fschild.getAttribute("TYPE"):"";
				var row=fschild.hasAttribute("RO") || fschild.hasAttribute("ROWS")?fschild.getAttribute("RO") || fschild.getAttribute("ROWS"):"";
				var colom=fschild.hasAttribute("CL") || fschild.hasAttribute("COLOMS")?fschild.getAttribute("CL") || fschild.getAttribute("COLOMS"):"";
				var bgcolor=fschild.hasAttribute("BGC") || fschild.hasAttribute("BACKGROUNDCOLOR")?fschild.getAttribute("BGC") || fschild.getAttribute("BACKGROUNDCOLOR"):"";
				var color=fschild.hasAttribute("C") || fschild.hasAttribute("COLOR")?fschild.getAttribute("C") || fschild.getAttribute("COLOR"):"";
				var start=fschild.hasAttribute("START") || fschild.hasAttribute("TOUCHSTART")?fschild.getAttribute("START") || fschild.getAttribute("TOUCHSTART"):"";
				var end=fschild.hasAttribute("END") || fschild.hasAttribute("TOUCHEND")?fschild.getAttribute("END") || fschild.getAttribute("TOUCHEND"):"";
				var move=fschild.hasAttribute("MOVE") || fschild.hasAttribute("TOUCHMOVE")?fschild.getAttribute("MOVE") || fschild.getAttribute("TOUCHMOVE"):"";
				var cancel=fschild.hasAttribute("CANCEL") || fschild.hasAttribute("TOUCHCANCEL")?fschild.getAttribute("CANCEL") || fschild.getAttribute("TOUCHCANCEL"):"";
				ui.TXT(bgcolor,color,colom,row,plch,type,id,layout,value,parents,thm,x,y,w,h,radius,start,end,move,cancel);			
			}
			else if(fschild.nodeName=="EZZAT.SLIDER" || fschild.nodeName=="SLD"){
				var parents=fschild.parentNode;
				var value=fschild.hasAttribute("V") || fschild.hasAttribute("VALUE")?fschild.getAttribute("VALUE") || fschild.getAttribute("V"):"";
				var x=fschild.hasAttribute("X") || fschild.hasAttribute("LEFT")?fschild.getAttribute("X") || fschild.getAttribute("LEFT"):"";
				var y=fschild.hasAttribute("Y") || fschild.hasAttribute("TOP")?fschild.getAttribute("Y") || fschild.getAttribute("TOP"):"";
				var w=fschild.hasAttribute("W") || fschild.hasAttribute("WIDTH")?fschild.getAttribute("W") || fschild.getAttribute("WIDTH"):"";
				var h=fschild.hasAttribute("H") || fschild.hasAttribute("HEIGHT")?fschild.getAttribute("H") || fschild.getAttribute("HEIGHT"):"";
				var id=fschild.hasAttribute("ID") || fschild.hasAttribute("IDENTIFY")?fschild.getAttribute("ID") || fschild.getAttribute("IDENTIFY"):"";
				var align=fschild.hasAttribute("ALIGNMENT") || fschild.hasAttribute("ALG")?fschild.getAttribute("ALG") || fschild.getAttribute("ALIGNMENT"):"";
				var start=fschild.hasAttribute("START") || fschild.hasAttribute("TOUCHSTART")?fschild.getAttribute("START") || fschild.getAttribute("TOUCHSTART"):"";
				var end=fschild.hasAttribute("END") || fschild.hasAttribute("TOUCHEND")?fschild.getAttribute("END") || fschild.getAttribute("TOUCHEND"):"";
				var move=fschild.hasAttribute("MOVE") || fschild.hasAttribute("TOUCHMOVE")?fschild.getAttribute("MOVE") || fschild.getAttribute("TOUCHMOVE"):"";
				var cancel=fschild.hasAttribute("CANCEL") || fschild.hasAttribute("TOUCHCANCEL")?fschild.getAttribute("CANCEL") || fschild.getAttribute("TOUCHCANCEL"):"";
				ui.SLIDER(parents,layout,thm,id,x,y,w,h,align,value,start,end,move,cancel);
			}
			else if(fschild.nodeName=="CHB" || fschild.nodeName=="EZZAT.CHECKBOX"){
				var parents=fschild.parentNode;
				var text=fschild.hasAttribute("TXT") || fschild.hasAttribute("TEXTVALUE")?fschild.getAttribute("TEXTVALUE") || fschild.getAttribute("TXT"):"";
				var x=fschild.hasAttribute("X") || fschild.hasAttribute("LEFT")?fschild.getAttribute("X") || fschild.getAttribute("LEFT"):"";
				var y=fschild.hasAttribute("Y") || fschild.hasAttribute("TOP")?fschild.getAttribute("Y") || fschild.getAttribute("TOP"):"";
				var id=fschild.hasAttribute("ID") || fschild.hasAttribute("IDENTIFY")?fschild.getAttribute("ID") || fschild.getAttribute("IDENTIFY"):"";
				var bgcolor=fschild.hasAttribute("BGC") || fschild.hasAttribute("BACKGROUNDCOLOR")?fschild.getAttribute("BGC") || fschild.getAttribute("BACKGROUNDCOLOR"):"";
				var color=fschild.hasAttribute("C") || fschild.hasAttribute("COLOR")?fschild.getAttribute("C") || fschild.getAttribute("COLOR"):"";
				var start=fschild.hasAttribute("START") || fschild.hasAttribute("TOUCHSTART")?fschild.getAttribute("START") || fschild.getAttribute("TOUCHSTART"):"";
				var end=fschild.hasAttribute("END") || fschild.hasAttribute("TOUCHEND")?fschild.getAttribute("END") || fschild.getAttribute("TOUCHEND"):"";
				var move=fschild.hasAttribute("MOVE") || fschild.hasAttribute("TOUCHMOVE")?fschild.getAttribute("MOVE") || fschild.getAttribute("TOUCHMOVE"):"";
				var cancel=fschild.hasAttribute("CANCEL") || fschild.hasAttribute("TOUCHCANCEL")?fschild.getAttribute("CANCEL") || fschild.getAttribute("TOUCHCANCEL"):"";
				ui.CHECKBOX(bgcolor,color,parents,layout,thm,id,x,y,text,start,end,move,cancel)
			}
			else if(fschild.nodeName=="RDB" || fschild.nodeName=="EZZAT.RADIO"){
				var parents=fschild.parentNode;
				var text=fschild.hasAttribute("TXT") || fschild.hasAttribute("TEXTVALUE")?fschild.getAttribute("TEXTVALUE") || fschild.getAttribute("TXT"):"";
				var x=fschild.hasAttribute("X") || fschild.hasAttribute("LEFT")?fschild.getAttribute("X") || fschild.getAttribute("LEFT"):"";
				var y=fschild.hasAttribute("Y") || fschild.hasAttribute("TOP")?fschild.getAttribute("Y") || fschild.getAttribute("TOP"):"";
				var id=fschild.hasAttribute("ID") || fschild.hasAttribute("IDENTIFY")?fschild.getAttribute("ID") || fschild.getAttribute("IDENTIFY"):"";
				var gname=fschild.hasAttribute("GN") || fschild.hasAttribute("GROUPNAME")?fschild.getAttribute("GN") || fschild.getAttribute("GROUPNAME"):"";
				var bgcolor=fschild.hasAttribute("BGC") || fschild.hasAttribute("BACKGROUNDCOLOR")?fschild.getAttribute("BGC") || fschild.getAttribute("BACKGROUNDCOLOR"):"";
				var color=fschild.hasAttribute("C") || fschild.hasAttribute("COLOR")?fschild.getAttribute("C") || fschild.getAttribute("COLOR"):"";
				var start=fschild.hasAttribute("START") || fschild.hasAttribute("TOUCHSTART")?fschild.getAttribute("START") || fschild.getAttribute("TOUCHSTART"):"";
				var end=fschild.hasAttribute("END") || fschild.hasAttribute("TOUCHEND")?fschild.getAttribute("END") || fschild.getAttribute("TOUCHEND"):"";
				var move=fschild.hasAttribute("MOVE") || fschild.hasAttribute("TOUCHMOVE")?fschild.getAttribute("MOVE") || fschild.getAttribute("TOUCHMOVE"):"";
				var cancel=fschild.hasAttribute("CANCEL") || fschild.hasAttribute("TOUCHCANCEL")?fschild.getAttribute("CANCEL") || fschild.getAttribute("TOUCHCANCEL"):"";	
				ui.RADIO(bgcolor,color,parents,layout,thm,id,x,y,text,gname,start,end,move,cancel)
			}
			else if(fschild.nodeName=="STH" || fschild.nodeName=="EZZAT.SWITCH"){
				var parents=fschild.parentNode;
				var x=fschild.hasAttribute("X") || fschild.hasAttribute("LEFT")?fschild.getAttribute("X") || fschild.getAttribute("LEFT"):"";
				var y=fschild.hasAttribute("Y") || fschild.hasAttribute("TOP")?fschild.getAttribute("Y") || fschild.getAttribute("TOP"):"";
				var id=fschild.hasAttribute("ID") || fschild.hasAttribute("IDENTIFY")?fschild.getAttribute("ID") || fschild.getAttribute("IDENTIFY"):"";
				var align=fschild.hasAttribute("ALIGNMENT") || fschild.hasAttribute("ALG")?fschild.getAttribute("ALG") || fschild.getAttribute("ALIGNMENT"):"";
				var status=fschild.hasAttribute("STATUS") || fschild.hasAttribute("STS")?fschild.getAttribute("STATUS") || fschild.getAttribute("STS"):"";
				var start=fschild.hasAttribute("START") || fschild.hasAttribute("TOUCHSTART")?fschild.getAttribute("START") || fschild.getAttribute("TOUCHSTART"):"";
				var end=fschild.hasAttribute("END") || fschild.hasAttribute("TOUCHEND")?fschild.getAttribute("END") || fschild.getAttribute("TOUCHEND"):"";
				var move=fschild.hasAttribute("MOVE") || fschild.hasAttribute("TOUCHMOVE")?fschild.getAttribute("MOVE") || fschild.getAttribute("TOUCHMOVE"):"";
				var cancel=fschild.hasAttribute("CANCEL") || fschild.hasAttribute("TOUCHCANCEL")?fschild.getAttribute("CANCEL") || fschild.getAttribute("TOUCHCANCEL"):"";
				ui.SWITCH(parents,layout,thm,id,x,y,align,status,start,end,move,cancel)
			}
			else if(fschild.nodeName=="NTF" || fschild.nodeName=="EZZAT.NOTIFICATION"){
				var parents=fschild.parentNode;
				var value=fschild.hasAttribute("V") || fschild.hasAttribute("VALUE")?fschild.getAttribute("VALUE") || fschild.getAttribute("V"):"";
				var x=fschild.hasAttribute("X") || fschild.hasAttribute("LEFT")?fschild.getAttribute("X") || fschild.getAttribute("LEFT"):"";
				var y=fschild.hasAttribute("Y") || fschild.hasAttribute("TOP")?fschild.getAttribute("Y") || fschild.getAttribute("TOP"):"";
				var w=fschild.hasAttribute("W") || fschild.hasAttribute("WIDTH")?fschild.getAttribute("W") || fschild.getAttribute("WIDTH"):"";
				var h=fschild.hasAttribute("H") || fschild.hasAttribute("HEIGHT")?fschild.getAttribute("H") || fschild.getAttribute("HEIGHT"):"";
				var id=fschild.hasAttribute("ID") || fschild.hasAttribute("IDENTIFY")?fschild.getAttribute("ID") || fschild.getAttribute("IDENTIFY"):"";
				var radius=fschild.hasAttribute("R") || fschild.hasAttribute("RADIUS")?fschild.getAttribute("R") || fschild.getAttribute("RADIUS"):"";
				var bgcolor=fschild.hasAttribute("BGC") || fschild.hasAttribute("BACKGROUNDCOLOR")?fschild.getAttribute("BGC") || fschild.getAttribute("BACKGROUNDCOLOR"):"";
				var color=fschild.hasAttribute("C") || fschild.hasAttribute("COLOR")?fschild.getAttribute("C") || fschild.getAttribute("COLOR"):"";	
				var start=fschild.hasAttribute("START") || fschild.hasAttribute("TOUCHSTART")?fschild.getAttribute("START") || fschild.getAttribute("TOUCHSTART"):"";
				var end=fschild.hasAttribute("END") || fschild.hasAttribute("TOUCHEND")?fschild.getAttribute("END") || fschild.getAttribute("TOUCHEND"):"";
				var move=fschild.hasAttribute("MOVE") || fschild.hasAttribute("TOUCHMOVE")?fschild.getAttribute("MOVE") || fschild.getAttribute("TOUCHMOVE"):"";
				var cancel=fschild.hasAttribute("CANCEL") || fschild.hasAttribute("TOUCHCANCEL")?fschild.getAttribute("CANCEL") || fschild.getAttribute("TOUCHCANCEL"):"";
				ui.NOTFICATION(thm,bgcolor,color,parents,value,layout,id,radius,x,y,w,h,start,end,move,cancel)
			}	
			else if(fschild.nodeName=="HED" || fschild.nodeName=="EZZAT.HEADER"){
				var parents=fschild.parentNode;
				var value=fschild.hasAttribute("V") || fschild.hasAttribute("VALUE")?fschild.getAttribute("VALUE") || fschild.getAttribute("V"):"";
				var x=fschild.hasAttribute("X") || fschild.hasAttribute("LEFT")?fschild.getAttribute("X") || fschild.getAttribute("LEFT"):"";
				var y=fschild.hasAttribute("Y") || fschild.hasAttribute("TOP")?fschild.getAttribute("Y") || fschild.getAttribute("TOP"):"";
				var w=fschild.hasAttribute("W") || fschild.hasAttribute("WIDTH")?fschild.getAttribute("W") || fschild.getAttribute("WIDTH"):"";
				var h=fschild.hasAttribute("H") || fschild.hasAttribute("HEIGHT")?fschild.getAttribute("H") || fschild.getAttribute("HEIGHT"):"";
				var id=fschild.hasAttribute("ID") || fschild.hasAttribute("IDENTIFY")?fschild.getAttribute("ID") || fschild.getAttribute("IDENTIFY"):"";
				var radius=fschild.hasAttribute("R") || fschild.hasAttribute("RADIUS")?fschild.getAttribute("R") || fschild.getAttribute("RADIUS"):"";
				var txtp=fschild.hasAttribute("TXTP") || fschild.hasAttribute("TEXTPOSITION")?fschild.getAttribute("TXTP") || fschild.getAttribute("TEXTPOSITION"):"";
				var bgcolor=fschild.hasAttribute("BGC") || fschild.hasAttribute("BACKGROUNDCOLOR")?fschild.getAttribute("BGC") || fschild.getAttribute("BACKGROUNDCOLOR"):"";
				var color=fschild.hasAttribute("C") || fschild.hasAttribute("COLOR")?fschild.getAttribute("C") || fschild.getAttribute("COLOR"):"";
				var start=fschild.hasAttribute("START") || fschild.hasAttribute("TOUCHSTART")?fschild.getAttribute("START") || fschild.getAttribute("TOUCHSTART"):"";
				var end=fschild.hasAttribute("END") || fschild.hasAttribute("TOUCHEND")?fschild.getAttribute("END") || fschild.getAttribute("TOUCHEND"):"";
				var move=fschild.hasAttribute("MOVE") || fschild.hasAttribute("TOUCHMOVE")?fschild.getAttribute("MOVE") || fschild.getAttribute("TOUCHMOVE"):"";
				var cancel=fschild.hasAttribute("CANCEL") || fschild.hasAttribute("TOUCHCANCEL")?fschild.getAttribute("CANCEL") || fschild.getAttribute("TOUCHCANCEL"):"";
				ui.HEADER(bgcolor,color,parents,thm,value,layout,id,radius,x,y,w,h,txtp,start,end,move,cancel)
			}	
		}
		fschild=fschild.nextSibling;
	}
}
window.onload=function(){
	createEls();
}