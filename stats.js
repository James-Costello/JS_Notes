function DataSet(...a) {
   this.data=[];
   for (i=0;i<a.length;i++) this.data.push(a[i]);
   this.mean=setMean(this.data);
   this.variance=setVar(this.mean, this.data);
   this.stdDeviation=this.variance**0.5;
}

function setMean(data) {c=0; for (i=0;i<data.length;i++) c+=data[i]; return c/data.length}
function setVar(mean,data) {c=0; for (i=0;i<data.length;i++) c+=(data[i]-mean)**2; return c/data.length}

DataSet.prototype.setMean=function() {this.mean=setMean(this.data); return this.mean}
DataSet.prototype.setVar=function() {this.variance=setVar(this.mean,this.data); this.stdDeviation=this.variance**0.5; return this.variance}
