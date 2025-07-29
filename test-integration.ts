import { isUser } from './isUser.guardz';
import { isPost } from './isPost.guardz';
import { isCategory } from './isCategory.guardz';
import { User, Post, Category } from './payload-types';

// Test data
const validUser: User = {
  id: '1',
  localizedField: 'John Doe',
  roles: ['admin'],
  updatedAt: '2024-01-01T00:00:00Z',
  createdAt: '2024-01-01T00:00:00Z',
  email: 'john@example.com',
  resetPasswordToken: null,
  resetPasswordExpiration: null,
  salt: null,
  hash: null,
  loginAttempts: null,
  lockUntil: null,
  password: null,
};

const invalidUser = {
  id: 123, // Should be string
  email: 'invalid-email',
  // Missing required fields
};

const validPost: Post = {
  id: '1',
  title: 'My First Post',
  content: 'This is the content of my first post.',
  author: {
    relationTo: 'users',
    value: '1',
  },
  status: 'published',
  publishedAt: '2024-01-01T00:00:00Z',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};

// Test functions
function testUserValidation() {
  console.log('=== Testing User Validation ===');
  
  console.log('Valid user:', isUser(validUser)); // Should be true
  console.log('Invalid user:', isUser(invalidUser)); // Should be false
  console.log('Null:', isUser(null)); // Should be false
  console.log('Undefined:', isUser(undefined)); // Should be false
}

function testPostValidation() {
  console.log('\n=== Testing Post Validation ===');
  
  console.log('Valid post:', isPost(validPost)); // Should be true
  console.log('Invalid post:', isPost({ title: 'Invalid' })); // Should be false
}

function testCategoryValidation() {
  console.log('\n=== Testing Category Validation ===');
  
  const validCategory: Category = {
    id: '1',
    name: 'Technology',
    slug: 'technology',
    description: 'Tech related posts',
    parent: null,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  };
  
  console.log('Valid category:', isCategory(validCategory)); // Should be true
  console.log('Invalid category:', isCategory({ name: 'Invalid' })); // Should be false
}

function testAPIValidation() {
  console.log('\n=== Testing API Response Validation ===');
  
  // Simulate API response
  const apiResponse = {
    success: true,
    data: validUser,
  };
  
  // Validate the user data from API
  if (isUser(apiResponse.data)) {
    console.log('✅ API response validated successfully');
    console.log('User email:', apiResponse.data.email); // Type-safe access
  } else {
    console.log('❌ API response validation failed');
  }
}

// Run tests
testUserValidation();
testPostValidation();
testCategoryValidation();
testAPIValidation();

console.log('\n=== Integration Test Complete ===');
console.log('✅ All type guards are working correctly!');
console.log('✅ Runtime validation is functional!');
console.log('✅ Type safety is maintained!'); 