<script setup></script>

<template>
  <div class="container">
    <!-- header -->
    <header class="header">
      <h1 class="header__title">Todo List :<input type="text" value="Name Here" /></h1>
    </header>
    <!-- input -->
    <section class="add">
      <form>
        <h2>task for today</h2>
        <input type="text" class="add_todo" />

        <h2>category</h2>

        <div class="options">
          <label>
            <input type="radio" name="category" value="business" />
            <span class="bubble business"></span>
            <div>business</div>
          </label>
          <label>
            <input type="radio" name="category" value="personal" />
            <span class="bubble personal"></span>
            <div>personal</div>
          </label>
        </div>

        <button type="submit" class="add__btn">add todo</button>
      </form>
    </section>
    <!-- list -->
    <section class="list">
      <h2>todo list</h2>
      <div class="list__item">
        <label>
          <input type="checkbox" name="category" value="business" />
          <span class="bubble"></span>
        </label>

        <input type="text" class="add_todo" />

        <div class="button-box">
          <button type="button" class="edit">
            <span class="material-symbols-outlined">edit</span>
          </button>
          <button type="button" class="delete">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
