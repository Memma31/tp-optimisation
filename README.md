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