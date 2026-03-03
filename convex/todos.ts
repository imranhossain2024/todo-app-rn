import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query('todos').order('desc').collect();
    return todos;
  },
});

export const addTodo = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('todos', {
      text: args.text,
      isCompleted: false,
      createdAt: Date.now(),
    });
  },
});

export const toggleTodo = mutation({
  args: {
    id: v.id('todos'),
  },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    await ctx.db.patch(args.id, {
      isCompleted: !todo.isCompleted,
    });
  },
});

export const deleteTodo = mutation({
  args: {
    id: v.id('todos'),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const updateTodo = mutation({
  args: {
    id: v.id('todos'),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      text: args.text,
    });
  },
});

export const clearCompletedTodos = mutation({
  handler: async (ctx) => {
    const todos = await ctx.db.query('todos').collect();
    const completedTodos = todos.filter((todo) => todo.isCompleted);
    completedTodos.forEach((todo) => {
      ctx.db.delete(todo._id);
    });
  },
});
