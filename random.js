import java.util.Random;
public class Program
{
    public static void main(String[] args) {
        String names = "UCq-Fj5jknLsUf-MWSy4_brA UCq-Fj5jknLsUf-MWSy4_brA UCq-Fj5jknLsUf-MWSy4_brA UCq-Fj5jknLsUf-MWSy4_brA";
    
    String[] splitNames = names.split(" ");
    
    Random number = new Random();
    int rnumber = number.nextInt(splitNames.length);
    
    System.out.println(splitNames[rnumber]);
    }
}
