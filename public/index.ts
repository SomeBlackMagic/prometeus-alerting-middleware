import "reflect-metadata";
import {Core} from "../src/Kernel/App";
import {KernelInterface} from "../src/Kernel/KernelInterface";
import K8SKernel from "../src/Kernel/K8SKernel/K8SKernel";
import HttpKernel from "../src/Kernel/HttpKernel/HttpKernel";


import {ConfigFactory} from "@Config/app-config";

Core.loadEnv();

const configBase = ConfigFactory.getBase();
const configCore = ConfigFactory.getCore();

Core.bootstrap(configBase, configCore);
Core.info('Bootstrap system');


let kernels: KernelInterface[] = []


kernels.push(new HttpKernel());
kernels.push(new K8SKernel());

(async () => {
    console.log('Booting kernels');
    await Promise.all(kernels.map((item: KernelInterface) => {return item.boot(); })).catch((error) => {
        Core.error('Can not boot App:');
        throw error;
    });

    Core.info('Run booting kernels');
    await Promise.all(kernels.map((item: KernelInterface) => {return item.run(); })).catch((error) => {
        Core.error('Can not run App:');
        throw error;
    });

})();