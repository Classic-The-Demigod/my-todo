import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { completed } = body;

    // Verify todo belongs to user
    const todo = await prisma.todo.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
    });

    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    // Update todo
    const updatedTodo = await prisma.todo.update({
      where: { id: params.id },
      data: { completed },
    });

    return NextResponse.json({
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Verify todo belongs to user
    const todo = await prisma.todo.findFirst({
      where: {
        id: params.id,
        userId: session.user.id,
      },
    });

    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    // Delete todo
    await prisma.todo.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete todo" },
      { status: 500 }
    );
  }
}
