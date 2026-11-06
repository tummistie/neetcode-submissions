/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        if(list1 == nullptr && list2 == nullptr){
            return nullptr;
        }
        else if(list1 == nullptr){
            return list2;
        }
        else if(list2 == nullptr){
            return list1;
        }
        else{
            ListNode* lhs = list1;
            ListNode* rhs = list2;
            ListNode* head = lhs;

            if(lhs->val > rhs->val){
                head = rhs;
                rhs = rhs->next;
            }
            else{
                lhs = lhs->next;
            }
            ListNode* curr = head;
            while(lhs != nullptr || rhs != nullptr){
                if(rhs == nullptr && lhs != nullptr){
                    curr->next = lhs;
                    break;
                }
                else if(rhs != nullptr && lhs == nullptr){
                    curr->next = rhs;
                    break;
                }
                else if(lhs->val <= rhs->val){
                    curr->next = lhs;
                    curr = curr->next;
                    lhs = lhs->next;
                }
                else if(lhs->val > rhs->val){
                    curr->next = rhs;
                    curr = curr->next;
                    rhs = rhs->next;
                    
                }
            }
            return head;
        }
    }
};
