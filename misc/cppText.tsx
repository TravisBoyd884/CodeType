export const cppTextArray: string[] = [];
cppTextArray.push(`class Solution {~
public:~
    TreeNode* invertTree(TreeNode* root) {~
        // Base Case~
        if(root==NULL)~
            return NULL;~
        invertTree(root->left); //Call the left substree~
        invertTree(root->right); //Call the right substree~
        // Swap the nodes~
        TreeNode* temp = root->left;~
        root->left = root->right;~
        root->right = temp;~
        return root; // Return the root~
    }~
};~
`);
cppTextArray.push(`class Solution {~
public:~
    void DFS(TreeNode* root,int max,int &ans)~
    {~
        if(root==NULL) return;~
        if(root->val >= max){~
            ans++;~
            max = root->val;~
        }~
        DFS(root->left,max,ans);~
        DFS(root->right,max,ans);~
    }~
    int goodNodes(TreeNode* root) {~
        int ans = 0;~
        DFS(root,root->val,ans);~
        return ans;~
    }~
};~
`);
cppTextArray.push(`/**~
 * Definition for a binary tree node.~
 * struct TreeNode {~
 *     int val;~
 *     TreeNode *left;~
 *     TreeNode *right;~
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}~
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}~
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}~
 * };~
 */~
class Solution {~
public:~
    bool isBalanced(TreeNode* root) {~
        if(root==nullptr) return true;~
        return abs(height(root->left)-height(root->right))<=1 && isBalanced(root->left) && isBalanced(root->right);~
    }~
private:~
    int height(TreeNode*root){~
        if(root==nullptr) return 0;~
        return max(height(root->left),height(root->right))+1;~
    }~
};~
`);
