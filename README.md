# tp-optimisation

Création de l'image 1er aisser sans optimisation : 
PS C:\Users\lulu1\Documents\Importants\M2\docker\tpdockeroptimisation> docker build -t tp-optimisation .
[+] Building 135.7s (12/12) FINISHED                                                                               docker:desktop-linux
 => [internal] load build definition from dockerfile                                                                               0.2s
 => => transferring dockerfile: 381B                                                                                               0.0s 
 => [internal] load metadata for docker.io/library/node:latest                                                                     2.8s
 => [internal] load .dockerignore                                                                                                  0.1s
 => => transferring context: 2B                                                                                                    0.0s 
 => [1/7] FROM docker.io/library/node:latest@sha256:82a1d74c5988b72e839ac01c5bf0f7879a8ffd14ae40d7008016bca6ae12852b             104.4s
 => => resolve docker.io/library/node:latest@sha256:82a1d74c5988b72e839ac01c5bf0f7879a8ffd14ae40d7008016bca6ae12852b               0.1s 
 => => sha256:15512841bb7698c9199cc9f99b4ef9f4ff62fd0925799deed816db06764127c9 1.25MB / 1.25MB                                     0.9s 
 => => sha256:92aec2d688ae0de7a3e144ad2d43422c0c9da229871b1772225a3099dc4937cc 3.32kB / 3.32kB                                     0.6s 
 => => sha256:02638075ca33f9339a009686b16710b308a64a460ae8df9941319d9bd18bd48a 449B / 449B                                         0.8s
 => => sha256:98fcfa3f438bcfc471a40eaf8249f1bd3ab066b8bf7dec6b87ac2d2f8671a466 60.54MB / 60.54MB                                  52.2s 
 => => sha256:c611f5bb386bf2363abc0bd48072bd52d81ec37f3717e3d4c789fdd12e467168 211.42MB / 211.42MB                                88.9s
 => => sha256:ccbbb2080a06a2888e44131965340c1eccd23f4d49efe72176246649abfbf9d9 24.03MB / 24.03MB                                  20.8s 
 => => sha256:7d5073558d5a5274440fddfe987f56645dc90b8b84481e9e3dc858ac3311e33e 64.40MB / 64.40MB                                  55.3s 
 => => sha256:8fb375ec14f3df8b31b70d0216508565ab7264a7e16cac4f8cc07f8eca22445f 48.48MB / 48.48MB                                  38.0s 
 => => extracting sha256:8fb375ec14f3df8b31b70d0216508565ab7264a7e16cac4f8cc07f8eca22445f                                          2.8s 
 => => extracting sha256:ccbbb2080a06a2888e44131965340c1eccd23f4d49efe72176246649abfbf9d9                                          1.0s 
 => => extracting sha256:7d5073558d5a5274440fddfe987f56645dc90b8b84481e9e3dc858ac3311e33e                                          4.1s 
 => => extracting sha256:c611f5bb386bf2363abc0bd48072bd52d81ec37f3717e3d4c789fdd12e467168                                          9.5s 
 => => extracting sha256:92aec2d688ae0de7a3e144ad2d43422c0c9da229871b1772225a3099dc4937cc                                          0.1s 
 => => extracting sha256:98fcfa3f438bcfc471a40eaf8249f1bd3ab066b8bf7dec6b87ac2d2f8671a466                                          4.6s 
 => => extracting sha256:15512841bb7698c9199cc9f99b4ef9f4ff62fd0925799deed816db06764127c9                                          0.1s 
 => => extracting sha256:02638075ca33f9339a009686b16710b308a64a460ae8df9941319d9bd18bd48a                                          0.0s 
 => [internal] load build context                                                                                                  2.6s 
 => => transferring context: 13.88MB                                                                                               2.5s 
 => [2/7] WORKDIR /app                                                                                                             2.5s 
 => [3/7] COPY node_modules ./node_modules                                                                                         0.5s 
 => [4/7] COPY . /app                                                                                                              0.8s 
 => [5/7] RUN npm install                                                                                                          3.5s 
 => [6/7] RUN apt-get update && apt-get install -y build-essential ca-certificates locales && echo "en_US.UTF-8 UTF-8" > /etc/lo  14.1s 
 => [7/7] RUN npm run build                                                                                                        0.9s 
 => exporting to image                                                                                                             5.3s 
 => => exporting layers                                                                                                            3.0s 
 => => exporting manifest sha256:536aebbd82695f2145d2b296d0a3583c4982a507bb25793f521bd38fe6460ccb                                  0.0s 
 => => exporting config sha256:2ca664cf715216bd4842eb31d88e50872a38641ed818949b80fd1d5bb6169579                                    0.0s 
 => => exporting attestation manifest sha256:88ad0922733f0f9b89b03b0523ebbc728bbe7aecc8e4fa5a8fcf749590a16863                      0.1s 
 => => exporting manifest list sha256:cfef10495e9f068577a08a28c2245d69849778b5ca16d40aaec2d3995ed53580                             0.0s 
 => => naming to docker.io/library/tp-optimisation:latest                                                                          0.0s 
 => => unpacking to docker.io/library/tp-optimisation:latest                                                                       2.0s 
PS C:\Users\lulu1\Documents\Importants\M2\docker\tpdockeroptimisation> 

Taille de l'image : tp-optimisation   latest    cfef10495e9f   56 seconds ago   1.74GB



Modification de quelques elements du dockerFile, build de l'image : temps de build diminuer + taille de l'image légèrement réduite

PS C:\Users\lulu1\Documents\Importants\M2\docker\tpdockeroptimisation> docker build -t tp-optimisation .
[+] Building 32.5s (12/12) FINISHED                                                                                                                                                 docker:desktop-linux
 => [internal] load build definition from dockerfile                                                                                                                                                0.2s
 => => transferring dockerfile: 381B                                                                                                                                                                0.1s
 => [internal] load metadata for docker.io/library/node:latest                                                                                                                                      2.3s
 => [internal] load .dockerignore                                                                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                                                                     0.0s
 => [1/7] FROM docker.io/library/node:latest@sha256:82a1d74c5988b72e839ac01c5bf0f7879a8ffd14ae40d7008016bca6ae12852b                                                                                0.1s
 => => resolve docker.io/library/node:latest@sha256:82a1d74c5988b72e839ac01c5bf0f7879a8ffd14ae40d7008016bca6ae12852b                                                                                0.1s
 => [internal] load build context                                                                                                                                                                   0.8s
 => => transferring context: 448.52kB                                                                                                                                                               0.7s
 => CACHED [2/7] WORKDIR /app                                                                                                                                                                       0.0s
 => CACHED [3/7] COPY node_modules ./node_modules                                                                                                                                                   0.0s
 => [4/7] COPY . /app                                                                                                                                                                               2.6s
 => [5/7] RUN npm install                                                                                                                                                                           5.0s 
 => [6/7] RUN apt-get update && apt-get install -y build-essential ca-certificates locales && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && locale-gen                                             14.4s 
 => [7/7] RUN npm run build                                                                                                                                                                         0.9s 
 => exporting to image                                                                                                                                                                              5.7s 
 => => exporting layers                                                                                                                                                                             3.3s 
 => => exporting manifest sha256:ebb7ea906c2db849d34ace3a52c03655139d1cade8920d4d9015b85f95d3fa0e                                                                                                   0.1s 
 => => exporting config sha256:3baf9fb3647ebf769496c5f58e3459851acfb98f1bbe2b0d25bb21075e436b78                                                                                                     0.0s 
 => => exporting attestation manifest sha256:8fff467c8553cfd005406a8d6f49ada476d091a96e274f494ec585eaeed7eb52                                                                                       0.1s 
 => => exporting manifest list sha256:ca944374011dfc1b89b2791087ade461f2b8b5e633ffdcb0838b51b4786264ae                                                                                              0.1s 
 => => naming to docker.io/library/tp-optimisation:latest                                                                                                                                           0.1s 
 => => unpacking to docker.io/library/tp-optimisation:latest                                                                                                                                        1.8s 
PS C:\Users\lulu1\Documents\Importants\M2\docker\tpdockeroptimisation> docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
tp-optimisation   latest    ca944374011d   23 seconds ago   1.74GB
tpdocker-web      latest    32aa81af03a1   4 days ago       225MB
mongo             6.0       4bf2adba7807   11 days ago      1.05GB
flask-hello       latest    6205f107ef05   2 weeks ago      210MB
nginx             latest    33e0bbc7ca9e   5 weeks ago      279MB
PS C:\Users\lulu1\Documents\Importants\M2\docker\tpdockeroptimisation> docker build -t tp-optimisation .
[+] Building 40.0s (11/11) FINISHED                                                                                                                                                 docker:desktop-linux
 => [internal] load build definition from dockerfile                                                                                                                                                0.0s
 => => transferring dockerfile: 343B                                                                                                                                                                0.0s 
 => [internal] load metadata for docker.io/library/node:20                                                                                                                                          1.3s 
 => [internal] load .dockerignore                                                                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                                                                     0.0s 
 => [1/6] FROM docker.io/library/node:20@sha256:abcf9c98af22ea2c5d33435143d9d8a5f6f191e1e1938a7650fc8b78c382b5a9                                                                                   13.8s 
 => => resolve docker.io/library/node:20@sha256:abcf9c98af22ea2c5d33435143d9d8a5f6f191e1e1938a7650fc8b78c382b5a9                                                                                    0.0s 
 => => sha256:1f55cd1d78f288f4e4b4769f602960cee59c01dc374c66ecc88ba00dba186787 445B / 445B                                                                                                          0.3s 
 => => sha256:3c1ac4ffb2c8285b736520ed8ed017b065f1d50d88399a845fc29236299e5151 1.25MB / 1.25MB                                                                                                      0.7s 
 => => sha256:96fb1c168566b4b04293bb59cb0a2c829e059ce4f62e508e07d10d92f41c928b 48.41MB / 48.41MB                                                                                                    9.1s
 => => sha256:80022910787acd5f973ba4846cc291c116d214b5fd6b8ada51b2848be798911a 3.31kB / 3.31kB                                                                                                      0.6s 
 => => extracting sha256:80022910787acd5f973ba4846cc291c116d214b5fd6b8ada51b2848be798911a                                                                                                           0.1s
 => => extracting sha256:96fb1c168566b4b04293bb59cb0a2c829e059ce4f62e508e07d10d92f41c928b                                                                                                           3.9s 
 => => extracting sha256:3c1ac4ffb2c8285b736520ed8ed017b065f1d50d88399a845fc29236299e5151                                                                                                           0.5s 
 => => extracting sha256:1f55cd1d78f288f4e4b4769f602960cee59c01dc374c66ecc88ba00dba186787                                                                                                           0.1s 
 => [internal] load build context                                                                                                                                                                   0.5s 
 => => transferring context: 203.28kB                                                                                                                                                               0.5s 
 => [2/6] WORKDIR /app                                                                                                                                                                              2.4s 
 => [3/6] COPY . /app                                                                                                                                                                               1.1s 
 => [4/6] RUN npm install                                                                                                                                                                           2.4s 
 => [5/6] RUN apt-get update && apt-get install -y build-essential ca-certificates locales && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && locale-gen                                             12.2s 
 => [6/6] RUN npm run build                                                                                                                                                                         0.8s 
 => exporting to image                                                                                                                                                                              5.4s 
 => => exporting layers                                                                                                                                                                             3.1s 
                  0.0s
 => => naming to docker.io/library/tp-optimisation:latest                                                                                                0.0s
 => => naming to docker.io/library/tp-optimisation:latest                                                                                                                                           0.0s
 => => unpacking to docker.io/library/tp-optimisation:latest                                                                                                                                        1.8s
PS C:\Users\lulu1\Documents\Importants\M2\docker\tpdockeroptimisation> docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
tp-optimisation   latest    10d1cdac1af9   10 seconds ago   1.68GB
