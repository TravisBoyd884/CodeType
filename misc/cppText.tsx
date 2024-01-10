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
cppTextArray.push(`class Solution {~
public:~
    pair<bool, int > dfs(TreeNode* root){~
        if (root == nullptr) return make_pair(true, 0);~
~
        pair<bool, int> left = dfs(root->left);~
        pair<bool, int> right = dfs(root->right);~
~
        bool res = left.first && right.first && abs(left.second - right.second) <= 1;~
~
        return make_pair(res, 1 + max(left.second, right.second));~
    }~
    ~
    bool isBalanced(TreeNode* root) {~
        return dfs(root).first;~
    }~
~
    ~
};~
`);
