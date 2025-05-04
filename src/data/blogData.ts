
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  categories: Category[];
  featured?: boolean;
}

// Mock data
export const authors: Author[] = [
  {
    id: "1",
    name: "Jane Doe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Jane is a tech enthusiast and software developer with over 5 years of experience in web development.",
  },
  {
    id: "2",
    name: "John Smith",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "John is a UX designer passionate about creating beautiful and functional interfaces that users love.",
  },
  {
    id: "3",
    name: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Emily is a content writer with expertise in technology, digital marketing, and lifestyle topics.",
  }
];

export const categories: Category[] = [
  { id: "1", name: "Technology", slug: "technology" },
  { id: "2", name: "Design", slug: "design" },
  { id: "3", name: "Lifestyle", slug: "lifestyle" },
  { id: "4", name: "Programming", slug: "programming" },
  { id: "5", name: "Productivity", slug: "productivity" },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript in 2024",
    slug: "getting-started-with-react-typescript-2024",
    excerpt: "Learn how to set up a modern React application with TypeScript and the latest best practices for efficient development.",
    content: `
    # Getting Started with React and TypeScript in 2024

    React has been a dominant force in the frontend development world for years now, and when combined with TypeScript, it creates a powerful development experience that catches errors early and improves code quality.

    ## Why TypeScript with React?

    TypeScript adds static type-checking to JavaScript, which means many common errors can be caught at compile time rather than at runtime. This is especially valuable in large React applications where component props can get complex.

    Benefits include:
    - Early error detection
    - Better IDE support with autocomplete
    - Easier refactoring
    - Self-documenting code

    ## Setting Up Your Project

    The easiest way to start a new React + TypeScript project is using Vite:

    \`\`\`bash
    npm create vite@latest my-react-app -- --template react-ts
    cd my-react-app
    npm install
    npm run dev
    \`\`\`

    ## Creating Your First Component

    Let's create a simple counter component with TypeScript:

    \`\`\`tsx
    import { useState } from 'react';

    interface CounterProps {
      initialCount?: number;
      label: string;
    }

    export const Counter = ({ initialCount = 0, label }: CounterProps) => {
      const [count, setCount] = useState(initialCount);

      return (
        <div>
          <h2>{label}: {count}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      );
    };
    \`\`\`

    ## Best Practices for React + TypeScript

    1. **Define prop types with interfaces**: Always define your component props with TypeScript interfaces.
    2. **Avoid 'any'**: Try to avoid using the 'any' type as it defeats the purpose of TypeScript.
    3. **Use function components with explicit return types**: They're more concise and work better with TypeScript.
    4. **Leverage discriminated unions for state**: For complex state management, use discriminated unions.

    ## Conclusion

    The combination of React and TypeScript brings tremendous value to frontend development. The initial learning curve is well worth the long-term benefits of more maintainable and error-resistant code.

    Give it a try on your next project, and you'll likely wonder how you ever developed without it!
    `,
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    date: "2024-05-01",
    author: authors[0],
    categories: [categories[0], categories[3]],
    featured: true
  },
  {
    id: "2",
    title: "The Principles of Modern UI Design",
    slug: "principles-of-modern-ui-design",
    excerpt: "Explore the key principles that guide effective and appealing UI design in the modern digital landscape.",
    content: `
    # The Principles of Modern UI Design

    User Interface (UI) design is the process of creating interfaces that are visually appealing, functional, and provide a great user experience. In this article, we'll explore the key principles that guide effective UI design.

    ## Clarity

    A clear interface helps users navigate your application without confusion. This means:
    - Using easily recognizable elements
    - Creating a visual hierarchy
    - Providing feedback for actions
    - Using consistent patterns

    Clarity should be your top priority. If users can't figure out how to use your application, nothing else matters.

    ## Flexibility

    Modern UI design needs to work across multiple devices and screen sizes. Responsive design is no longer optional—it's essential. Your interface should:
    - Adjust gracefully to different screen sizes
    - Work well with both touch and mouse input
    - Adapt to user preferences (like dark mode)
    - Provide multiple paths to complete tasks

    ## Visual Hierarchy

    Not all elements in your interface are equally important. Visual hierarchy helps users understand what to focus on:
    - Size: Larger elements draw more attention
    - Color: Bright or contrasting colors stand out
    - Spacing: Strategic white space guides the eye
    - Typography: Font weight and size convey importance

    ## Consistency

    Consistency makes interfaces predictable and easier to learn:
    - Visual consistency: Similar elements should look and behave similarly
    - Functional consistency: Similar operations should work in the same way
    - External consistency: Follow platform conventions when appropriate

    ## User Control

    Give users a sense of control over the interface:
    - Provide clear ways to undo actions
    - Allow customization where appropriate
    - Don't make drastic changes without user consent
    - Make important information persistent

    ## Accessibility

    Design for all users, including those with disabilities:
    - Ensure sufficient color contrast
    - Support keyboard navigation
    - Provide text alternatives for images
    - Make interactive elements large enough for easy interaction

    ## Conclusion

    Great UI design balances aesthetics with functionality. By applying these principles thoughtfully, you can create interfaces that are not only beautiful but also usable and accessible to all.
    `,
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    date: "2024-04-28",
    author: authors[1],
    categories: [categories[1]],
    featured: true
  },
  {
    id: "3",
    title: "How to Build a Productive Morning Routine",
    slug: "build-productive-morning-routine",
    excerpt: "Discover how to create a morning routine that sets you up for a productive and fulfilling day.",
    content: `
    # How to Build a Productive Morning Routine

    How you start your morning can set the tone for your entire day. A well-designed morning routine can boost your productivity, improve your mental health, and help you achieve your goals. Let's explore how to create one that works for you.

    ## Why Morning Routines Matter

    The first hours after waking are when your willpower and focus are typically at their peak. By establishing a consistent morning routine, you:
    - Take advantage of your peak mental capacity
    - Reduce decision fatigue
    - Create a sense of control and accomplishment
    - Set a positive tone for the day

    ## Building Your Ideal Routine

    ### 1. Start with Sleep
    
    A great morning actually begins the night before. Aim for 7-9 hours of quality sleep and try to wake up at the same time each day—even on weekends.

    ### 2. Avoid Digital Devices (At First)

    Resist the urge to check your email or social media immediately after waking. This can trigger stress responses and derail your morning.

    ### 3. Hydrate

    After hours without water, your body needs hydration. Drink a large glass of water first thing to rehydrate your body and kick-start your metabolism.

    ### 4. Move Your Body

    Physical activity increases blood flow and releases endorphins. This doesn't have to be a full workout—even 5-10 minutes of stretching, yoga, or a brisk walk can make a difference.

    ### 5. Practice Mindfulness

    Take a few minutes for meditation, deep breathing, or simply sitting quietly. This helps center your thoughts and prepare mentally for the day ahead.

    ### 6. Fuel Properly

    Eat a nutritious breakfast that combines protein, healthy fats, and complex carbohydrates to provide sustained energy throughout the morning.

    ### 7. Plan Your Day

    Take 5-10 minutes to review your schedule and set your top priorities for the day. This creates clarity and helps you focus on what's most important.

    ## Sample Morning Routine

    Here's what an effective morning routine might look like:
    - 6:00 AM: Wake up and drink a glass of water
    - 6:05 AM: 5 minutes of stretching
    - 6:10 AM: 10 minutes of meditation
    - 6:20 AM: Shower and get dressed
    - 6:40 AM: Prepare and eat breakfast
    - 7:00 AM: Review calendar and set daily priorities
    - 7:15 AM: Begin your first focused work session

    ## Making It Stick

    The key to a successful morning routine is consistency. Start small with just 2-3 elements and gradually build up. Remember that your routine should serve you—not the other way around. Adjust as needed based on your energy levels, schedule changes, and life circumstances.

    With patience and persistence, your morning routine can become a powerful tool for productivity and wellbeing.
    `,
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    date: "2024-04-20",
    author: authors[2],
    categories: [categories[2], categories[4]]
  },
  {
    id: "4",
    title: "Understanding JavaScript Promises",
    slug: "understanding-javascript-promises",
    excerpt: "Learn how to master asynchronous JavaScript with Promises and write cleaner, more maintainable code.",
    content: `
    # Understanding JavaScript Promises

    JavaScript Promises are a powerful way to handle asynchronous operations. They provide a cleaner alternative to callbacks and help avoid the dreaded "callback hell."

    ## What is a Promise?

    A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's essentially a placeholder for a value that may not be available yet.

    A Promise exists in one of three states:
    - **Pending**: Initial state, neither fulfilled nor rejected
    - **Fulfilled**: The operation completed successfully
    - **Rejected**: The operation failed

    ## Creating a Promise

    Here's how to create a basic Promise:

    \`\`\`javascript
    const myPromise = new Promise((resolve, reject) => {
      // Asynchronous operation
      const success = true;
      
      if (success) {
        resolve("Operation completed successfully!");
      } else {
        reject("Operation failed!");
      }
    });
    \`\`\`

    ## Using Promises

    You can handle the result of a Promise using \`then()\`, \`catch()\`, and \`finally()\`:

    \`\`\`javascript
    myPromise
      .then(result => {
        console.log(result); // "Operation completed successfully!"
      })
      .catch(error => {
        console.error(error); // Only runs if the Promise is rejected
      })
      .finally(() => {
        console.log("This runs regardless of success or failure");
      });
    \`\`\`

    ## Chaining Promises

    One of the most powerful features of Promises is the ability to chain them:

    \`\`\`javascript
    fetchUserData(userId)
      .then(userData => fetchUserPosts(userData.id))
      .then(posts => {
        // Do something with the posts
        return posts;
      })
      .then(posts => fetchCommentsForPosts(posts))
      .then(comments => {
        // Final processing
        displayComments(comments);
      })
      .catch(error => {
        // This will catch errors from any of the above steps
        handleError(error);
      });
    \`\`\`

    ## Promise.all and Promise.race

    \`Promise.all\` lets you handle multiple Promises together:

    \`\`\`javascript
    const promises = [fetchUser(), fetchPosts(), fetchComments()];
    
    Promise.all(promises)
      .then(([user, posts, comments]) => {
        // All Promises resolved successfully
        updateUI(user, posts, comments);
      })
      .catch(error => {
        // If any Promise fails, this runs
        showError(error);
      });
    \`\`\`

    \`Promise.race\` resolves or rejects as soon as the first Promise resolves or rejects:

    \`\`\`javascript
    const promises = [
      fetchDataFromAPI1(), // Takes 300ms
      fetchDataFromAPI2(), // Takes 200ms
      fetchDataFromAPI3()  // Takes 100ms
    ];
    
    Promise.race(promises)
      .then(fastestResult => {
        // fastestResult will be from API3
        useFirstAvailableData(fastestResult);
      });
    \`\`\`

    ## Async/Await

    Modern JavaScript provides async/await syntax, which makes working with Promises even cleaner:

    \`\`\`javascript
    async function getUserData(userId) {
      try {
        const user = await fetchUser(userId);
        const posts = await fetchPosts(user.id);
        const comments = await fetchComments(posts);
        
        return { user, posts, comments };
      } catch (error) {
        handleError(error);
      }
    }
    
    // Using the async function
    getUserData(123).then(data => {
      updateUI(data);
    });
    \`\`\`

    ## Conclusion

    Promises are an essential part of modern JavaScript. They simplify asynchronous code, make error handling more consistent, and provide a foundation for advanced patterns like async/await. Understanding Promises is crucial for writing clean, maintainable JavaScript applications.
    `,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    date: "2024-04-15",
    author: authors[0],
    categories: [categories[0], categories[3]]
  },
  {
    id: "5",
    title: "The Art of Digital Minimalism",
    slug: "art-of-digital-minimalism",
    excerpt: "Explore how embracing digital minimalism can lead to better focus, improved wellbeing, and more intentional technology use.",
    content: `
    # The Art of Digital Minimalism

    In our hyper-connected world, we're constantly bombarded with notifications, updates, and the pressure to stay connected. Digital minimalism offers a thoughtful approach to technology use that can help you reclaim your time and attention.

    ## What is Digital Minimalism?

    Digital minimalism is a philosophy that helps you question what digital communication tools (and behaviors surrounding these tools) add the most value to your life. It's about being intentional with your technology use rather than letting it control you.

    ## The Problem with Digital Maximalism

    Many of us have fallen into the trap of digital maximalism—the mindset that more technology is always better:
    - We install every app that might be useful
    - We say yes to every new social media platform
    - We feel obligated to respond to messages immediately
    - We fill every moment of downtime with screen time

    This approach leads to:
    - Decreased attention spans
    - Increased anxiety and FOMO (fear of missing out)
    - Reduced deep thinking and creativity
    - Less meaningful real-world connections

    ## Principles of Digital Minimalism

    ### 1. Clutter is costly

    Each app, service, or subscription demands some of your attention and cognitive load. These costs add up quickly and are often hidden.

    ### 2. Optimization is important

    It's not enough to use a tool occasionally to justify its existence in your digital life. How you use each tool matters.

    ### 3. Intentionality is satisfying

    Being deliberate about your technology use creates a sense of autonomy that the passive consumption of digital content cannot match.

    ## Implementing Digital Minimalism

    ### Perform a Digital Declutter

    Take 30 days to step back from optional technologies. This includes:
    - Social media
    - News sites and apps
    - Video games
    - Streaming services
    - Any app that's not essential for work or basic utilities

    During this period, rediscover activities that you find meaningful and satisfying without screens.

    ### Reintroduce Technology Selectively

    After your declutter period, carefully reintroduce technologies that:
    - Serve something you deeply value
    - Are the best way to serve this value
    - Have a specific role in your life with operating procedures

    ### Create Rules for Technology Use

    For example:
    - No phones during meals or conversations
    - No social media before noon
    - Batch process emails twice daily
    - Keep your phone in another room while sleeping
    - Use social media only on desktop computers

    ## Digital Minimalism in Practice

    Here's what digital minimalism might look like in daily life:
    
    - Using a basic phone or turning off all non-essential notifications
    - Limiting social media use to 30 minutes per day
    - Having tech-free zones and times in your home
    - Reading physical books instead of scrolling
    - Journaling or meditating instead of reaching for your phone first thing
    - Scheduling specific times to check email and messages

    ## Conclusion

    Digital minimalism isn't about rejecting technology entirely—it's about using it more intentionally to support your values rather than letting it dictate your attention and time. By taking a minimalist approach, you can enjoy the benefits of modern technology while avoiding its pitfalls.
    
    The result? More focus, less anxiety, better relationships, and a greater sense of control over your digital life.
    `,
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    date: "2024-04-10",
    author: authors[2],
    categories: [categories[2], categories[4]]
  },
  {
    id: "6",
    title: "The Complete Guide to CSS Grid Layout",
    slug: "complete-guide-css-grid-layout",
    excerpt: "Master CSS Grid Layout with this comprehensive guide covering everything from basics to advanced techniques.",
    content: `
    # The Complete Guide to CSS Grid Layout

    CSS Grid Layout is a two-dimensional layout system that has revolutionized the way we design web layouts. Unlike Flexbox (which is mainly one-dimensional), Grid allows you to control both rows and columns simultaneously.

    ## Getting Started with Grid

    ### Creating a Grid Container

    To create a grid container, you use \`display: grid\` or \`display: inline-grid\`:

    \`\`\`css
    .container {
      display: grid;
    }
    \`\`\`

    ### Defining Columns and Rows

    You can define your grid's columns and rows using \`grid-template-columns\` and \`grid-template-rows\`:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: 200px 200px 200px;
      grid-template-rows: 100px 100px;
    }
    \`\`\`

    This creates a grid with 3 columns (each 200px wide) and 2 rows (each 100px tall).

    ### The fr Unit

    The \`fr\` (fraction) unit allows you to distribute available space proportionally:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
    \`\`\`

    This creates three columns where the middle one is twice as wide as the others.

    ### repeat() Function

    For repetitive patterns, use the \`repeat()\` function:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* Same as: grid-template-columns: 1fr 1fr 1fr; */
    }
    \`\`\`

    ## Grid Gaps

    Use \`column-gap\`, \`row-gap\`, or the shorthand \`gap\` to create spacing between grid items:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;  /* 20px gap between all rows and columns */
      /* Alternatively: */
      column-gap: 20px;
      row-gap: 10px;
    }
    \`\`\`

    ## Positioning Grid Items

    ### Grid Lines

    You can position items using grid lines:

    \`\`\`css
    .item {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    \`\`\`

    Shorthand properties:

    \`\`\`css
    .item {
      grid-column: 1 / 3;  /* Start at line 1, end before line 3 */
      grid-row: 1 / 2;     /* Start at line 1, end before line 2 */
    }
    \`\`\`

    You can also use negative numbers to count from the end:

    \`\`\`css
    .item {
      grid-column: 1 / -1;  /* Span full width */
    }
    \`\`\`

    ### The span Keyword

    The \`span\` keyword specifies how many grid tracks an item should cover:

    \`\`\`css
    .item {
      grid-column: 1 / span 2;  /* Start at line 1 and span 2 columns */
      grid-row: 1 / span 3;     /* Start at line 1 and span 3 rows */
    }
    \`\`\`

    ## Grid Template Areas

    Grid areas provide a visual way to define your layout:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header header header"
        "sidebar content aside"
        "footer footer footer";
    }

    .header { grid-area: header; }
    .sidebar { grid-area: sidebar; }
    .content { grid-area: content; }
    .aside { grid-area: aside; }
    .footer { grid-area: footer; }
    \`\`\`

    ## Auto-placement

    Grid has powerful auto-placement algorithms. You can control the flow direction with \`grid-auto-flow\`:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-flow: row;  /* Default: fills rows first */
      /* grid-auto-flow: column;  Fills columns first */
      /* grid-auto-flow: dense;   Attempts to fill holes in the grid */
    }
    \`\`\`

    ## Responsive Layouts with Grid

    ### minmax()

    The \`minmax()\` function sets a minimum and maximum size:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
    \`\`\`

    ### auto-fill and auto-fit

    These keywords create as many tracks as will fit:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      /* or */
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    \`\`\`

    The difference: \`auto-fit\` will expand items to fill the available space, while \`auto-fill\` will keep the 200px width and fill with empty tracks.

    ## Alignment

    Grid provides multiple alignment properties:

    \`\`\`css
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      
      /* Align items within their cells */
      justify-items: center;  /* start, end, center, stretch */
      align-items: center;    /* start, end, center, stretch */
      
      /* Align the entire grid within the container */
      justify-content: space-between;  /* start, end, center, space-around, space-between, space-evenly */
      align-content: space-between;    /* start, end, center, space-around, space-between, space-evenly */
    }
    
    /* Individual item alignment (overrides container settings) */
    .item {
      justify-self: end;
      align-self: start;
    }
    \`\`\`

    ## Conclusion

    CSS Grid Layout provides unprecedented control over two-dimensional layouts. It works well with Flexbox—use Grid for major layout structures and Flexbox for alignment within those structures. With browser support now excellent, there's no reason not to make Grid a fundamental part of your CSS toolkit.
    `,
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    date: "2024-04-05",
    author: authors[1],
    categories: [categories[1], categories[3]]
  },
];

// Helper functions
export const getFeaturedPosts = (): Post[] => {
  return posts.filter(post => post.featured);
};

export const getRecentPosts = (count: number = 4): Post[] => {
  return [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, count);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostsByCategory = (categorySlug: string): Post[] => {
  return posts.filter(post => 
    post.categories.some(category => category.slug === categorySlug)
  );
};

export const getPostsByAuthor = (authorId: string): Post[] => {
  return posts.filter(post => post.author.id === authorId);
};
