# React Router v6: useNavigate Hook Issue in Nested Components

This repository demonstrates a common issue encountered when using the `useNavigate` hook in React Router v6 within nested components that aren't directly rendered by a `<Route>`. The problem is that the navigation might appear to fail silently, or throw seemingly unrelated errors. This is because `useNavigate` requires a valid router context which is not provided to deeply nested children.

## Problem

The `useNavigate` hook, while straightforward to use, needs to be placed within a component that is a child (directly or indirectly) of the `<Router>`, with the router context properly established by appropriate Route components.

## Solution

The solution involves ensuring that the context is passed down to all the components that intend to use `useNavigate`. This usually involves restructuring your component hierarchy to correctly use `Route` or `Outlet` components. Alternatively, passing the `navigate` function down as a prop could fix the issue.

## Setup

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.  You'll see the erroneous and corrected examples.