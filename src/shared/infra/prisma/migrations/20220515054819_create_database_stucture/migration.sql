-- CreateEnum
CREATE TYPE "TasksStatus" AS ENUM ('PENDING', 'DOING', 'DONE');

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TasksStatus" NOT NULL DEFAULT E'PENDING',

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
