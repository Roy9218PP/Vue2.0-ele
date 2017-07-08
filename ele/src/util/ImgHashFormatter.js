let imghashFromatter = function(imghash){
	if(!imghash){
		return "";
	}
	var s1 = imghash.slice(0,1);
	var s2 = imghash.slice(1,3);
	var s3 = imghash.slice(3);
	var s4 = imghash.slice(32);
	
	console.log('-----------------' + imghash)
	
	return "http://fuss10.elemecdn.com/"+s1+"/"+s2+"/"+s3+"."+s4;
};

export default imghashFromatter
	