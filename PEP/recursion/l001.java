// all index in an array
// public static void all index (int arr(),int idx, int fsf,int key)
// {
//     if (idx==arr.length())
//     int res []=new int[fsf];
 
// }
// else {
//     if(arr.(idx)==key )
//     fsf+=1;

// }
// all index (arr(),idx+1,fsf,key)
// if (idx>=0){
//      if(arr.(idx)==key ){
//        res[fsf]==idx;
//        fsf--;
//       }
//       else{}
//  }
// else {System.out.Print (res)}
// }
// void main ()
// {
//     int d []= new int {1,6,7,5,0,4,6,6};
//     all index(d,0,0,6);
// }
public static boolean dfs(int sr, int sc, int dr, int dc, int[][] dir, int[][] mat, int[][] vis) {
        if (sr == dr && sc == dc) {
            vis[sr][sc] = 1;
            display(vis);
            vis[sr][sc] = 0;
            return true;
        }

        boolean res = false;
        vis[sr][sc] = 1;
        for (int rad = 1; rad <= mat[sr][sc]; rad++) {
            for (int d = 0; d < dir.length; d++) {
                int r = sr + rad * dir[d][0];
                int c = sc + rad * dir[d][1];
                if (r >= 0 && c >= 0 && r <= dr && c <= dc)
                    res = res || dfs(r, c, dr, dc, dir, mat, vis);
            }

        }
        vis[sr][sc] = 0;
        return res;
    }

    public static void main(String[] args) {
        int t = scn.nextInt();
        while (t-- > 0) {
            int n = scn.nextInt();
            int[][] mat = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    mat[i][j] = scn.nextInt();
                }
            }

            boolean ans = false;
            if (mat[0][0] != 0) {
                int[][] vis = new int[n][n];
                int[][] dir = { { 0, 1 }, { 1, 0 } };
                ans = dfs(0, 0, n - 1, n - 1, dir, mat, vis);
            }
            if (!ans)
                System.out.println(-1);
           
        }
    }

}