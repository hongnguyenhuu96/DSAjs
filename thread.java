class Main {
  public static void main(String[] args) {
    MyThread mythread = new MyThread();
    Thread thread1 = new Thread(mythread);
    Thread thread2 = new Thread(mythread);
    thread1.setName("A");
    thread2.setName("B");
    
    thread1.start();
    thread2.start();
  }
}


class MyThread implements Runnable{
  public synchronized void run(){
    try{
      for(int i = 0; i < 50; i++){
        Thread.sleep(5);
        System.out.println(Thread.currentThread().getName() + " " + i);
      }
    } catch(Exception e){
      
    }
  }
}