const deploy = async () => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
    const token = await PlatziPunks.deploy(10000);

    console.log("PlatziPunks address:", token.address);
};

deploy().then(() => process.exit(0)).catch(
    error => {
        console.log(error);
        process.exit(1);
    }
);