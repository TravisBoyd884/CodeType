export const cppTextArray: string[] = [];
cppTextArray.push(`void bSort(int arrnumbers[], int n)~
{~
int i, j;~
bool check;~
for (i = 0; i < n-1; i++)~
{~
check = false;~
for (j = 0; j < n-i-1; j++)~
{~
if (arrnumbers[j] > arrnumbers[j+1])~
{~
swap(&arrnumbers[j], &arrnumbers[j+1]);~
check = true;~
}~
}~
`)
cppTextArray.push(`#include <iostream>~
#include <list>~
using namespace std;~
~
class Graph {~
  int numVertices;~
  list<int> *adjLists;~
  bool *visited;~
~
   public:~
  Graph(int V);~
  void addEdge(int src, int dest);~
  void DFS(int vertex);~
};~
~
// Initialize graph~
Graph::Graph(int vertices) {~
  numVertices = vertices;~
  adjLists = new list<int>[vertices];~
  visited = new bool[vertices];~
}~
~
// Add edges~
void Graph::addEdge(int src, int dest) {~
  adjLists[src].push_front(dest);~
}~
`)
cppTextArray.push(`void dijkstra(int G[max][max],int n,int startnode);~
int main() {~
   int G[max][max]={{0,1,0,3,10},{1,0,5,0,0},{0,5,0,2,1},{3,0,2,0,6},{10,0,1,6,0}};~
   int n=5;~
   int u=0;~
   dijkstra(G,n,u);~
   return 0;~
}~
void dijkstra(int G[max][max],int n,int startnode) {~
   int cost[max][max],distance[max],pred[max];~
   int visited[max],count,mindistance,nextnode,i,j;~
   for(i=0;i<n;i++)~
      for(j=0;j<n;j++)~
   if(G[i][j]==0)~
      cost[i][j]=INFINITY;~
   else~
      cost[i][j]=G[i][j];~
   for(i=0;i<n;i++) {~
      distance[i]=cost[startnode][i];~
      pred[i]=startnode;~
      visited[i]=0;~
   }~
   distance[startnode]=0;~
   visited[startnode]=1;~
   count=1;~
   while(count<n-1) {~
      mindistance=INFINITY;~
      for(i=0;i<n;i++)~
         if(distance[i]<mindistance&&!visited[i]) {~
         mindistance=distance[i];~
         nextnode=i;~
      }~
      visited[nextnode]=1;~
      for(i=0;i<n;i++)~
         if(!visited[i])~
      if(mindistance+cost[nextnode][i]<distance[i]) {~
         distance[i]=mindistance+cost[nextnode][i];~
         pred[i]=nextnode;~
      }~
      count++;~
   }~
   for(i=0;i<n;i++)~
   if(i!=startnode) {~
      cout<<"\nDistance of node"<<i<<"="<<distance[i];~
      cout<<"\nPath="<<i;~
      j=i;~
      do {~
         j=pred[j];~
         cout<<"<-"<<j;~
      }while(j!=startnode);~
   }~
}~
`)
