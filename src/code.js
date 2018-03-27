var sortedArr=[2,3,5,6,7,8,9,10,11];
function Bnode(data){
        this.left=this.right=null;
        this.data=data;
}
var Btree= function(){
    this.root=null;
}

var bt1=new Btree();
bt1.root=new Bnode(10);
bt1.root.left=new Bnode(-2);
bt1.root.right=new Bnode(7);
bt1.root.left.left=new Bnode(8);
//bt1.root.left.left.left=new Bnode(8);
bt1.root.left.right=new Bnode(-4);
var maxres=0;
var binaryTree= function(){
    var root;
    return{
        arr:[2,3,4,5,6,7,8,9,10,11],
        dataArr:[],
        dataArr2:[],
        temp:{},
        Node:function(val){
            this.data=val;
            this.left=this.right=null;
        },
       makeBST:function(arr,start,end){
           if(start>end){
                    return null;
           }
           var middle=Math.floor((start+end)/2);
           var node=new this.Node(arr[middle]);
           node.left=this.makeBST(arr,start,middle-1);
           node.right=this.makeBST(arr,middle+1,end);
           return node;
       },
       findMinDepthBst:function(root){
                    if(root === null){
                        return 0;
                     }else if(root.left === null && root.right === null ){
                            return 1;
                     }

                      var leftHeight= root.left?this.findMinDepthBst(root.left):1000;
                      var rightHeight= root.right?this.findMinDepthBst(root.right):1000;

                    return Math.min(leftHeight,rightHeight)+1;
       },
       levelOrderTraversal:function(root){
                if(root === null){
                        return false;
                }else{
                    this.dataArr.push(root);

                    while(this.dataArr.length >0){
                            var node=this.dataArr.shift();
                            console.log(node.data);
                            if(!node.data){
                                this.dataArr.length=0;
                            }
                            if(node.left !== null){
                                this.dataArr.push(node.left);
                            }
                            if(node.right !== null){
                                this.dataArr.push(node.right);
                            }
                    }
                }
                
       },
       printSpiralBST:function(root){
            if(root === null){
                    return false;
            }else{
                this.dataArr.push(root);
                while(this.dataArr.length > 0 || this.dataArr2.length > 0){
                        while(this.dataArr.length > 0){
                            var node=this.dataArr.shift();
                            console.log(node.data);
                            if(!node.data){
                                this.dataArr.length=0;
                            }
                            if(node.left){
                                this.dataArr2.push(node.left);
                            }
                            if(node.right){
                                this.dataArr2.push(node.right);
                            }
                            
                        }
                        while(this.dataArr2.length > 0){
                            var node1=this.dataArr2.pop();
                            console.log(node1.data);
                            if(!node1.data){
                                this.dataArr2.length=0;
                            }
                            if(node1.left){
                                this.dataArr.push(node1.left);
                            }
                            if(node1.right){
                                this.dataArr.push(node1.right);
                            }
                        }
                }
            }
       },
       printVerticalPath(root){
           if(root ==null){
                return false;
           }else{
               var node=root;
               console.log(node.data);
               if(node.left){

               }
           }
       },
       getHeightBST(root){
           var node=root;
        if(node === null){
                return 0;
        }else{
            let leftHeight=this.getHeightBST(node.left);
            let rightheight=this.getHeightBST(node.right);

            return (1+ (Math.max(leftHeight,rightheight)))
        }
       },
       maxSumPathBst(node){
           
           if(node === null){
                    return 0;
           }else{
               console.log('L',node.data);
               let left= this.maxSumPathBst(node.left)
                console.log("R",node.data);
               let right= this.maxSumPathBst(node.right)
                
               let max_single=Math.max(Math.max(left,right)+node.data, node.data);
                let max_top=Math.max(left + right + node.data,max_single);
                
                maxres=Math.max(maxres,max_top);
               console.log("max max_single",max_top);
               return max_single
           }
       }
       
    }
}
var Node=binaryTree().makeBST(sortedArr,0,sortedArr.length);
console.log(binaryTree().makeBST(sortedArr,0,sortedArr.length));

//console.log(binaryTree().findMinDepthBst(Node));

//console.log(binaryTree().levelOrderTraversal(Node));
//console.log(binaryTree().printSpiralBST(Node));
//console.log(binaryTree().printVerticalPath(Node));

console.log("binary tree height",+binaryTree().maxSumPathBst(bt1.root));
console.log('final maxres',maxres);
//find subarray for specific sum

function findSubArrayToSum(arr,sum){
        var start=0,end,currentSum=arr[0];
        for(var i=0;i<arr.length;i++){
           
            while(currentSum > sum){
                currentSum=currentSum -arr[start]
                start++;
            }
            if(currentSum === sum){
                end=i;
                console.log("start :",start,"end:",end);
                return
        }
            currentSum=currentSum+arr[i];
        }
       
}

findSubArrayToSum([2,4,3,6,4,8,9,10,11,17,13],10) ;



function LinkedList(){
    this.root=null;
    this.length=0;
}
function NodeLs(val){
        this.data=val;
        this.next=null;
}
LinkedList.prototype={
    constructor:LinkedList,
    addNode: function (val){
        if(this.root === null){
            this.root= new NodeLs(val);
        }else{
            var node=this.root;
            while(node.next){
                node=node.next;
            }
            node.next=new NodeLs(val);;
        }
    }
}

var ls= new LinkedList();
ls.addNode(2);
ls.addNode(3);
ls.addNode(4);
console.log("linked list",ls);
