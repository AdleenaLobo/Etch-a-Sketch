const body=document.querySelector('body');
const input=document.getElementById('input');
const submitButton=document.querySelector('button');
submitButton.addEventListener('click', build);
const outerBody=document.querySelector('.outerBody');

function build(){
	const inputval=input.value;
for (i=1;i<=inputval;i++){
	const container=document.createElement('div');
	container.style='border:1px solid black; display:flex; justify-conetnt:center;';

	for (j=1;j<=inputval;j++)
	{
			const gridButton=document.createElement('button');
			gridButton.classList.add('.grid-button');
			gridButton.style='background-color:white;height:30px; width:30px;';
			container.appendChild(gridButton);

gridButton.addEventListener('click',function(){
	this.style='background-color:black;height:30px;width:30px;';
	
})
	}
	outerBody.appendChild(container);
}
}

