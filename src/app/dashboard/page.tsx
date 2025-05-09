"use client";

import Image from "next/image";
import Circle from "@/assets/shape.png";
import User from "@/assets/Ellipse 3.png";
import Clock from "@/assets/clock.png";
import PlusIcon from "@/assets/plus.svg";

const Dashboard = () => {
  //     try {
  //       const validatedData = todoSchema.parse({ title: newTodo });

  //       const response = await fetch('/api/todos', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(validatedData)
  //       });

  //       if (!response.ok) throw new Error('Failed to add todo');

  //       const data = await response.json();
  //       setTodos([...todos, data.todo]);
  //       setNewTodo('');
  //       toast.success('Todo added successfully!');
  //     } catch (error) {
  //       if (error instanceof z.ZodError) {
  //         error.errors.forEach((err) => toast.error(err.message));
  //       } else {
  //         toast.error('Failed to add todo');
  //       }
  //     }
  //   };

  return (
    <section className="relative min-h-screen bg-gray-50">
      <main className="  bg-[#50C2C9]">
        <Image src={Circle} alt="" className="absolute top-0 left-0" />

        <div className="flex flex-col items-center justify-center pt-[8rem] pb-4 text-white">
          <Image src={User} alt="user" />

          <p>Welcome Jeegar goyani</p>
        </div>
      </main>

      <main className="py-[5rem] px-6">
        <div className="flex items-center justify-center">
          <Image src={Clock} alt="clock" />
        </div>

        <div className="pt-6 space-y-4">
          <h1>Task List</h1>

          <div className="shadow-lg p-6 rounded-lg space-y-4">
            <div className="flex justify-between">
              <p>Daily Task</p>

              <Image src={PlusIcon} alt="plus" />
            </div>
            <div className="flex items-center gap-4">
              <span className="border-2 w-5 h-5 "></span>
              <p>Learning Programming by 12PM</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="border-2 w-5 h-5 "></span>
              <p>Learn how to cook by 1PM</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="border-2 w-5 h-5 "></span>
              <p>Learn how to play at 2PM</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="border-2 w-5 h-5 "></span>
              <p>Have lunch at 4PM</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="border-2 w-5 h-5 "></span>
              <p>Going to travel 6PM</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
