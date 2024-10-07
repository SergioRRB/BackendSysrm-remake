-- CreateTable
CREATE TABLE `areas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cliente_area` INTEGER NOT NULL,
    `nombre_area` VARCHAR(250) NOT NULL,
    `contacto_area` VARCHAR(250) NOT NULL,
    `cargo_contacto_area` VARCHAR(250) NOT NULL,
    `telefono_area` CHAR(9) NOT NULL,
    `email_area` VARCHAR(250) NOT NULL,
    `contacto_extra_area` VARCHAR(250) NOT NULL,
    `telefono_extra_area` CHAR(9) NOT NULL,
    `email_extra_area` VARCHAR(250) NOT NULL,
    `id_creador_area` INTEGER NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NOT NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `asignacion_recojos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_orden_servicio_recojo` CHAR(11) NOT NULL,
    `id_proveedor_recojo` INTEGER NULL,
    `dni_conductor_recojo` CHAR(11) NULL,
    `nombre_conductor_recojo` VARCHAR(250) NULL,
    `dni_auxiliar_recojo` CHAR(11) NULL,
    `nombre_auxiliar_recojo` VARCHAR(250) NULL,
    `id_conductor_recojo` INTEGER NULL,
    `id_auxiliar_recojo` INTEGER NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni_cliente` CHAR(11) NOT NULL,
    `razon_social_cliente` VARCHAR(250) NOT NULL,
    `representante_cliente` VARCHAR(250) NOT NULL,
    `clave_cliente` VARCHAR(250) NOT NULL,
    `id_vendedor_usuario_cliente` INTEGER NOT NULL,
    `limite_credito_cliente` DECIMAL(15, 4) NOT NULL,
    `alerta_credito_cliente` DECIMAL(15, 4) NOT NULL,
    `ubigeo_cliente` CHAR(11) NOT NULL,
    `direccion_cliente` VARCHAR(250) NOT NULL,
    `referencias_cliente` VARCHAR(250) NOT NULL,
    `contacto_cliente` VARCHAR(250) NOT NULL,
    `telefono_cliente` CHAR(9) NOT NULL,
    `email_cliente` VARCHAR(250) NOT NULL,
    `area_cliente` VARCHAR(250) NOT NULL,
    `logo_cliente` VARCHAR(250) NOT NULL,
    `id_creador_cliente` INTEGER NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NOT NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cotizaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cotizacion` CHAR(11) NOT NULL,
    `id_cliente_cotizacion` INTEGER NOT NULL,
    `id_area_cotizacion` INTEGER NOT NULL,
    `cantidad_destinos_cotizacion` INTEGER NOT NULL,
    `recibo_cotizacion` CHAR(11) NOT NULL,
    `sub_total_cotizacion` DECIMAL(12, 1) NOT NULL,
    `igv_cotizacion` DECIMAL(12, 1) NOT NULL,
    `precio_total_cotizacion` DECIMAL(12, 1) NOT NULL,
    `validacion_cotizacion` CHAR(1) NULL DEFAULT '0',
    `id_creador_cotizacion` INTEGER NOT NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cotizaciones_destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cotizacion_cotizacion_destino` CHAR(11) NOT NULL,
    `id_cliente_cotizacion_destino` INTEGER NOT NULL,
    `id_area_cotizacion_destino` INTEGER NOT NULL,
    `consignado_cotizacion_destino` VARCHAR(250) NOT NULL,
    `dni_ruc_cotizacion_destino` CHAR(11) NOT NULL,
    `telefono_cotizacion_destino` CHAR(9) NOT NULL,
    `telefono_exc_cotizacion_destino` CHAR(9) NOT NULL,
    `direccion_cotizacion_destino` VARCHAR(250) NOT NULL,
    `referencias_cotizacion_destino` VARCHAR(250) NOT NULL,
    `tarifario_cotizacion_destino` VARCHAR(15) NOT NULL,
    `ubigeo_cotizacion_destino` CHAR(11) NOT NULL,
    `tmin_entrega_cotizacion_destino` INTEGER NOT NULL,
    `tmax_entrega_cotizacion_destino` INTEGER NOT NULL,
    `tipo_envio_cotizacion_destino` VARCHAR(15) NOT NULL,
    `contenido_mercancia_cotizacion_destino` VARCHAR(250) NOT NULL,
    `peso_mercancia_cotizacion_destino` INTEGER NOT NULL,
    `total_metros_cubicos_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `total_tarifa_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `tipo_logistica_cotizacion_destino` VARCHAR(15) NOT NULL,
    `cantidad_mercancia_cotizacion_destino` INTEGER NOT NULL,
    `largo_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `ancho_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `alto_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `total_peso_volumen_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `valor_mercancia_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `packing_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `seguro_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `monta_carga_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `total_adicional_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `retorno_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `estiba_desestiba_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `transporte_extra_cotizacion_destino` DECIMAL(12, 1) NOT NULL,
    `guia_transportista_cotizacion_destino` CHAR(11) NULL,
    `guia_remision_cotizacion_destino` CHAR(11) NULL,
    `documento_1_cotizacion_destino` CHAR(11) NULL,
    `documento_2_cotizacion_destino` CHAR(11) NULL,
    `id_creador_cotizacion_destino` INTEGER NOT NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `departamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_dep` VARCHAR(50) NULL,
    `ubigeo` VARCHAR(15) NULL,
    `pais_id` INTEGER NOT NULL,
    `activo` INTEGER NULL DEFAULT 1,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `despachos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_num_manifiesto_despacho` CHAR(11) NOT NULL,
    `id_transportista_despacho` INTEGER NULL,
    `guia_transportista_despacho` CHAR(11) NOT NULL,
    `conductor_despacho` VARCHAR(250) NULL,
    `id_conductor_despacho` INTEGER NULL,
    `auxiliar_despacho` VARCHAR(250) NULL,
    `id_auxiliar_despacho` INTEGER NULL,
    `ubigeo_despacho` CHAR(11) NOT NULL,
    `placa_despacho` VARCHAR(250) NULL,
    `tipo_vehiculo_despacho` VARCHAR(250) NULL,
    `id_vehiculo_despacho` INTEGER NULL,
    `cantidad_bultos_despacho` INTEGER NULL,
    `peso_total_despacho` DECIMAL(12, 1) NULL,
    `id_creador_despacho` INTEGER NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `despachos_envios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_transportista_despacho_envio` INTEGER NULL,
    `id_num_manifiesto_despacho_envio` CHAR(11) NOT NULL,
    `id_num_guia_despacho_envio` CHAR(11) NOT NULL,
    `id_agente_despacho_envio` INTEGER NULL,
    `id_creador_despacho` INTEGER NOT NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `distritos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_dist` VARCHAR(50) NULL,
    `ubigeo` VARCHAR(15) NULL,
    `provincia_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estados_guias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_num_guia_estado_guia` CHAR(11) NOT NULL,
    `num_intento_estado_guia` VARCHAR(11) NOT NULL,
    `proceso_estado_guia` VARCHAR(11) NOT NULL,
    `estado_mercancia_estado_guia` VARCHAR(250) NOT NULL,
    `fecha_proceso_estado_guia` DATE NOT NULL,
    `comentario_estado_guia` VARCHAR(250) NOT NULL,
    `imagen_1_estado_guia` VARCHAR(250) NULL,
    `imagen_2_estado_guia` VARCHAR(250) NULL,
    `imagen_3_estado_guia` VARCHAR(250) NULL,
    `imagen_4_estado_guia` VARCHAR(250) NULL,
    `imagen_5_estado_guia` VARCHAR(250) NULL,
    `imagen_6_estado_guia` VARCHAR(250) NULL,
    `id_creador_estado_guia` INTEGER NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estados_recojos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_orden_servicio_estado_recojo` CHAR(11) NOT NULL,
    `proceso_estado_recojo` CHAR(11) NOT NULL,
    `estado_mercancia_estado_recojo` CHAR(11) NOT NULL,
    `comentario_estado_recojo` VARCHAR(250) NOT NULL,
    `imagen_estado_recojo` VARCHAR(250) NULL,
    `id_creador_estado_recojo` INTEGER NOT NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `liquidaciones_agentes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_agente_liquidacion_agente` INTEGER NOT NULL,
    `num_manifiesto_liquidacion_agente` CHAR(11) NOT NULL,
    `num_documento_liquidacion_agente` CHAR(11) NOT NULL,
    `tipo_documento_liquidacion_agente` VARCHAR(250) NOT NULL,
    `estado_documento_liquidacion_agente` VARCHAR(250) NOT NULL,
    `pdf_liquidacion_agente` VARCHAR(250) NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `liquidaciones_clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orden_servicio_liquidacion_cliente` CHAR(11) NOT NULL,
    `num_documento_liquidacion_cliente` CHAR(11) NOT NULL,
    `estado_documento_liquidacion_cliente` VARCHAR(250) NOT NULL,
    `pdf_liquidacion_cliente` VARCHAR(250) NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `liquidaciones_transportistas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `num_manifiesto_liquidacion_transportista` CHAR(11) NOT NULL,
    `num_documento_liquidacion_transportista` CHAR(11) NOT NULL,
    `tipo_documento_liquidacion_transportista` VARCHAR(250) NOT NULL,
    `estado_documento_liquidacion_transportista` VARCHAR(250) NOT NULL,
    `pdf_liquidacion_transportista` VARCHAR(250) NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_grupal_notificacion` CHAR(11) NOT NULL,
    `visto_notificacion` CHAR(1) NULL DEFAULT '0',
    `id_usuario_emisor_notificacion` INTEGER NOT NULL,
    `id_usuario_receptor_notificacion` INTEGER NOT NULL,
    `titulo_notificacion` VARCHAR(250) NOT NULL,
    `mensaje_notificacion` VARCHAR(250) NOT NULL,
    `fecha_vigencia_notificacion` DATE NOT NULL,
    `fecha_creado` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permisos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario_permiso` INTEGER NOT NULL,
    `comercial_cotizacion_permiso` INTEGER NOT NULL DEFAULT 1,
    `comercial_punto_venta_permiso` INTEGER NOT NULL DEFAULT 1,
    `comercial_validacion_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_registro_envio_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_registro_masivo_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_programacion_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_asignacion_recojo_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_lista_recojo_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_registro_carga_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_estado_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_despacho_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_consultas_permiso` INTEGER NOT NULL DEFAULT 1,
    `operaciones_seguimiento_permiso` INTEGER NOT NULL DEFAULT 1,
    `liquidacion_permiso` INTEGER NOT NULL DEFAULT 1,
    `administracion_usuario_permiso` INTEGER NOT NULL DEFAULT 1,
    `administracion_cliente_permiso` INTEGER NOT NULL DEFAULT 1,
    `administracion_proveedor_permiso` INTEGER NOT NULL DEFAULT 1,
    `administracion_vehiculo_permiso` INTEGER NOT NULL DEFAULT 1,
    `administracion_area_permiso` INTEGER NOT NULL DEFAULT 1,
    `tarifarios_permiso` INTEGER NOT NULL DEFAULT 1,
    `ajustes_permiso` INTEGER NOT NULL DEFAULT 1,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id_usuario_permiso`(`id_usuario_permiso`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `programaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_orden_servicio` CHAR(11) NOT NULL,
    `id_cliente_programacion` INTEGER NOT NULL,
    `area_programacion` VARCHAR(250) NOT NULL,
    `ubigeo_programacion` CHAR(11) NOT NULL,
    `direccion_programacion` VARCHAR(250) NOT NULL,
    `referencias_programacion` VARCHAR(250) NOT NULL,
    `contacto_programacion` VARCHAR(250) NOT NULL,
    `telefono_programacion` CHAR(9) NOT NULL,
    `correo_programacion` VARCHAR(250) NOT NULL,
    `descripcion_mercancia_programacion` VARCHAR(250) NOT NULL,
    `cantidad_bultos_programacion` INTEGER NOT NULL,
    `peso_mercancia_programacion` DECIMAL(12, 1) NOT NULL,
    `peso_volumen_programacion` DECIMAL(12, 1) NOT NULL,
    `metros_cubicos_programacion` DECIMAL(12, 1) NOT NULL,
    `fecha_programacion` DATE NOT NULL,
    `hora_programacion` TIME(0) NOT NULL,
    `id_creador_programacion` INTEGER NOT NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proveedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni_proveedor` CHAR(11) NOT NULL,
    `razon_social_proveedor` VARCHAR(250) NOT NULL,
    `representante_proveedor` VARCHAR(250) NOT NULL,
    `clave_proveedor` VARCHAR(250) NOT NULL,
    `tipo_proveedor` VARCHAR(250) NOT NULL,
    `tipo_servicio_proveedor` VARCHAR(250) NOT NULL,
    `ubigeo_proveedor` CHAR(11) NOT NULL,
    `direccion_proveedor` VARCHAR(250) NOT NULL,
    `referencias_proveedor` VARCHAR(250) NOT NULL,
    `contacto_proveedor` VARCHAR(250) NOT NULL,
    `telefono_proveedor` CHAR(9) NOT NULL,
    `email_proveedor` VARCHAR(250) NOT NULL,
    `id_creador_proveedor` INTEGER NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NOT NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provincias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_prov` VARCHAR(50) NULL,
    `ubigeo` VARCHAR(15) NULL,
    `departamento_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `punto_ventas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_punto_venta` CHAR(11) NOT NULL,
    `id_cliente_punto_venta` INTEGER NOT NULL,
    `id_area_punto_venta` INTEGER NOT NULL,
    `cantidad_destinos_punto_venta` INTEGER NOT NULL,
    `recibo_punto_venta` CHAR(11) NOT NULL,
    `sub_total_punto_venta` DECIMAL(12, 1) NOT NULL,
    `igv_punto_venta` DECIMAL(12, 1) NOT NULL,
    `precio_total_punto_venta` DECIMAL(12, 1) NOT NULL,
    `validacion_punto_venta` CHAR(1) NULL DEFAULT '0',
    `id_creador_punto_venta` INTEGER NOT NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `punto_ventas_destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_punto_venta_destino` CHAR(11) NOT NULL,
    `id_cliente_punto_venta_destino` INTEGER NOT NULL,
    `id_area_punto_venta_destino` INTEGER NOT NULL,
    `consignado_punto_venta_destino` VARCHAR(250) NOT NULL,
    `dni_ruc_punto_venta_destino` CHAR(11) NOT NULL,
    `telefono_punto_venta_destino` CHAR(9) NOT NULL,
    `telefono_exc_punto_venta_destino` CHAR(9) NOT NULL,
    `direccion_punto_venta_destino` VARCHAR(250) NOT NULL,
    `referencias_punto_venta_destino` VARCHAR(250) NOT NULL,
    `tarifario_punto_venta_destino` VARCHAR(15) NOT NULL,
    `ubigeo_punto_venta_destino` CHAR(11) NOT NULL,
    `tmin_entrega_punto_venta_destino` INTEGER NOT NULL,
    `tmax_entrega_punto_venta_destino` INTEGER NOT NULL,
    `tipo_envio_punto_venta_destino` VARCHAR(15) NOT NULL,
    `contenido_mercancia_punto_venta_destino` VARCHAR(250) NOT NULL,
    `peso_mercancia_punto_venta_destino` INTEGER NOT NULL,
    `total_metros_cubicos_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `total_tarifa_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `tipo_logistica_punto_venta_destino` VARCHAR(15) NOT NULL,
    `cantidad_mercancia_punto_venta_destino` INTEGER NOT NULL,
    `largo_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `ancho_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `alto_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `total_peso_volumen_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `valor_mercancia_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `packing_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `seguro_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `monta_carga_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `total_adicional_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `retorno_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `estiba_desestiba_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `transporte_extra_punto_venta_destino` DECIMAL(12, 1) NOT NULL,
    `guia_transportista_punto_venta_destino` CHAR(11) NULL,
    `guia_remision_punto_venta_destino` CHAR(11) NULL,
    `documento_1_punto_venta_destino` CHAR(11) NULL,
    `documento_2_punto_venta_destino` CHAR(11) NULL,
    `id_creador_punto_venta_destino` INTEGER NOT NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registro_envio_destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_registro_envio_destino` CHAR(11) NOT NULL,
    `id_cliente_registro_envio_destino` INTEGER NOT NULL,
    `id_area_registro_envio_destino` INTEGER NOT NULL,
    `consignado_registro_envio_destino` VARCHAR(250) NOT NULL,
    `dni_ruc_registro_envio_destino` CHAR(11) NOT NULL,
    `telefono_registro_envio_destino` CHAR(9) NOT NULL,
    `telefono_exc_registro_envio_destino` CHAR(9) NOT NULL,
    `direccion_registro_envio_destino` VARCHAR(250) NOT NULL,
    `referencias_registro_envio_destino` VARCHAR(250) NOT NULL,
    `tarifario_registro_envio_destino` VARCHAR(15) NOT NULL,
    `ubigeo_registro_envio_destino` CHAR(11) NOT NULL,
    `tmin_entrega_registro_envio_destino` INTEGER NOT NULL,
    `tmax_entrega_registro_envio_destino` INTEGER NOT NULL,
    `tipo_envio_registro_envio_destino` VARCHAR(15) NOT NULL,
    `contenido_mercancia_registro_envio_destino` VARCHAR(250) NOT NULL,
    `peso_mercancia_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `total_metros_cubicos_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `total_tarifa_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `tipo_logistica_registro_envio_destino` VARCHAR(15) NOT NULL,
    `cantidad_mercancia_registro_envio_destino` INTEGER NOT NULL,
    `largo_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `ancho_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `alto_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `total_peso_volumen_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `valor_mercancia_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `packing_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `seguro_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `monta_carga_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `total_adicional_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `retorno_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `estiba_desestiba_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `transporte_extra_registro_envio_destino` DECIMAL(12, 1) NOT NULL,
    `guia_transportista_registro_envio_destino` CHAR(11) NULL,
    `guia_remision_registro_envio_destino` CHAR(11) NULL,
    `documento_1_registro_envio_destino` CHAR(11) NULL,
    `documento_2_registro_envio_destino` CHAR(11) NULL,
    `id_creador_registro_envio_destino` INTEGER NOT NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NOT NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registro_envios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_registro_envios` CHAR(11) NOT NULL,
    `id_cliente_registro_envios` INTEGER NOT NULL,
    `id_area_registro_envios` INTEGER NOT NULL,
    `cantidad_destinos_registro_envios` INTEGER NOT NULL,
    `recibo_registro_envios` CHAR(11) NOT NULL,
    `sub_total_registro_envios` DECIMAL(12, 1) NOT NULL,
    `igv_registro_envios` DECIMAL(12, 1) NOT NULL,
    `precio_total_registro_envios` DECIMAL(12, 1) NOT NULL,
    `validacion_registro_envios` CHAR(1) NULL DEFAULT '0',
    `id_creador_registro_envios` INTEGER NOT NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NOT NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registro_masivo_destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_registro_masivo_destino` CHAR(11) NOT NULL,
    `id_cliente_registro_masivo_destino` INTEGER NOT NULL,
    `id_area_registro_masivo_destino` INTEGER NOT NULL,
    `consignado_registro_masivo_destino` VARCHAR(250) NOT NULL,
    `dni_ruc_registro_masivo_destino` CHAR(11) NOT NULL,
    `telefono_registro_masivo_destino` CHAR(9) NOT NULL,
    `telefono_exc_registro_masivo_destino` CHAR(9) NOT NULL,
    `direccion_registro_masivo_destino` VARCHAR(250) NOT NULL,
    `referencias_registro_masivo_destino` VARCHAR(250) NOT NULL,
    `tarifario_registro_masivo_destino` VARCHAR(15) NOT NULL,
    `ubigeo_registro_masivo_destino` CHAR(11) NOT NULL,
    `tmin_entrega_registro_masivo_destino` INTEGER NOT NULL,
    `tmax_entrega_registro_masivo_destino` INTEGER NOT NULL,
    `tipo_envio_registro_masivo_destino` VARCHAR(15) NOT NULL,
    `contenido_mercancia_registro_masivo_destino` VARCHAR(250) NOT NULL,
    `peso_mercancia_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `total_metros_cubicos_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `total_tarifa_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `tipo_logistica_registro_masivo_destino` VARCHAR(15) NOT NULL,
    `cantidad_mercancia_registro_masivo_destino` INTEGER NOT NULL,
    `largo_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `ancho_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `alto_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `total_peso_volumen_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `valor_mercancia_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `packing_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `seguro_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `monta_carga_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `total_adicional_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `retorno_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `estiba_desestiba_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `transporte_extra_registro_masivo_destino` DECIMAL(12, 1) NOT NULL,
    `guia_transportista_registro_masivo_destino` CHAR(11) NULL,
    `guia_remision_registro_masivo_destino` CHAR(11) NULL,
    `documento_1_registro_masivo_destino` CHAR(11) NULL,
    `documento_2_registro_masivo_destino` CHAR(11) NULL,
    `id_creador_registro_masivo_destino` INTEGER NOT NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registro_masivos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_registro_masivo` CHAR(11) NOT NULL,
    `id_cliente_registro_masivo` INTEGER NOT NULL,
    `id_area_registro_masivo` INTEGER NOT NULL,
    `cantidad_destinos_registro_masivo` INTEGER NOT NULL,
    `recibo_registro_masivo` CHAR(11) NOT NULL,
    `sub_total_registro_masivo` DECIMAL(12, 1) NOT NULL,
    `igv_registro_masivo` DECIMAL(12, 1) NOT NULL,
    `precio_total_masivo` DECIMAL(12, 1) NOT NULL,
    `validacion_masivo` CHAR(1) NULL DEFAULT '0',
    `id_creador_masivo` INTEGER NOT NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registros_cargas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_orden_servicio_registro_carga` CHAR(11) NOT NULL,
    `id_cliente_registro_carga` INTEGER NOT NULL,
    `id_area_registro_carga` INTEGER NOT NULL,
    `id_destino_registro_carga` INTEGER NOT NULL,
    `id_num_guia_registro_carga` CHAR(11) NOT NULL,
    `id_creador_registro_carga` INTEGER NULL,
    `guia_transportista_registro_carga` CHAR(11) NOT NULL,
    `guia_remision_registro_carga` CHAR(11) NOT NULL,
    `documento_1_registro_carga` CHAR(11) NOT NULL,
    `documento_2_registro_carga` CHAR(11) NOT NULL,
    `fecha_creado` DATE NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarifarios_agentes_aereos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_agente_tarifario_agente_aereo` INTEGER NOT NULL,
    `ubigeo_tarifario_agente_aereo` CHAR(11) NOT NULL,
    `kg_tarifario_agente_aereo` DECIMAL(12, 1) NOT NULL,
    `kg_adicional_tarifario_agente_aereo` DECIMAL(12, 1) NOT NULL,
    `tmin_tarifario_agente_aereo` INTEGER NOT NULL,
    `tmax_tarifario_agente_aereo` INTEGER NOT NULL,
    `id_creador_tarifario_agente_aereo` INTEGER NULL,
    `fecha_creado` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarifarios_agentes_courriers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_agente_tarifario_agente_courrier` INTEGER NOT NULL,
    `ubigeo_tarifario_agente_courrier` CHAR(11) NOT NULL,
    `kg_tarifario_agente_courrier` DECIMAL(12, 1) NOT NULL,
    `kg_adicional_tarifario_agente_courrier` DECIMAL(12, 1) NOT NULL,
    `tmin_tarifario_agente_courrier` INTEGER NOT NULL,
    `tmax_tarifario_agente_courrier` INTEGER NOT NULL,
    `id_creador_tarifario_agente_courrier` INTEGER NULL,
    `fecha_creado` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarifarios_clientes_aereos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cliente_tarifario_cliente_aereo` INTEGER NOT NULL,
    `id_area_tarifario_cliente_aereo` INTEGER NOT NULL,
    `ubigeo_tarifario_cliente_aereo` CHAR(11) NOT NULL,
    `kg_tarifario_cliente_aereo` DECIMAL(12, 1) NOT NULL,
    `kg_adicional_tarifario_cliente_aereo` DECIMAL(12, 1) NOT NULL,
    `tmin_tarifario_cliente_aereo` INTEGER NOT NULL,
    `tmax_tarifario_cliente_aereo` INTEGER NOT NULL,
    `id_creador_tarifario_cliente_aereo` INTEGER NULL,
    `fecha_creado` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarifarios_clientes_cargas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cliente_tarifario_cliente_carga` INTEGER NOT NULL,
    `id_area_tarifario_cliente_carga` INTEGER NOT NULL,
    `ubigeo_tarifario_cliente_carga` CHAR(11) NOT NULL,
    `kg_maximo_tarifario_cliente_carga` DECIMAL(12, 1) NOT NULL,
    `kg_base_adicional_tarifario_cliente_carga` DECIMAL(12, 1) NOT NULL,
    `paquete_tarifario_cliente_carga` DECIMAL(12, 1) NOT NULL,
    `tmin_tarifario_cliente_carga` INTEGER NOT NULL,
    `tmax_tarifario_cliente_carga` INTEGER NOT NULL,
    `id_creador_tarifario_cliente_carga` INTEGER NULL,
    `fecha_creado` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarifarios_clientes_courriers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cliente_tarifario_cliente_courrier` INTEGER NOT NULL,
    `id_area_tarifario_cliente_courrier` INTEGER NOT NULL,
    `ubigeo_tarifario_cliente_courrier` CHAR(11) NOT NULL,
    `kg_tarifario_cliente_courrier` DECIMAL(12, 1) NOT NULL,
    `kg_adicional_tarifario_cliente_courrier` DECIMAL(12, 1) NOT NULL,
    `tmin_tarifario_cliente_courrier` INTEGER NOT NULL,
    `tmax_tarifario_cliente_courrier` INTEGER NOT NULL,
    `id_creador_tarifario_cliente_courrier` INTEGER NULL,
    `fecha_creado` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarifarios_clientes_valorizados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cliente_tarifario_cliente_valorizado` INTEGER NOT NULL,
    `id_area_tarifario_cliente_valorizado` INTEGER NOT NULL,
    `ubigeo_tarifario_cliente_valorizado` CHAR(11) NOT NULL,
    `producto_tarifario_cliente_valorizado` VARCHAR(250) NOT NULL,
    `costo_producto_tarifario_cliente_valorizado` DECIMAL(12, 1) NOT NULL,
    `tmin_tarifario_cliente_valorizado` INTEGER NOT NULL,
    `tmax_tarifario_cliente_valorizado` INTEGER NOT NULL,
    `id_creador_tarifario_cliente_valorizado` INTEGER NULL,
    `fecha_creado` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarifarios_transportistas_cargas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_transportista_tarifario_transportista_carga` INTEGER NOT NULL,
    `ubigeo_tarifario_transportista_carga` CHAR(11) NOT NULL,
    `kg_maximo_tarifario_transportista_carga` DECIMAL(12, 1) NOT NULL,
    `kg_base_adicional_tarifario_transportista_carga` DECIMAL(12, 1) NOT NULL,
    `paquete_tarifario_transportista_carga` DECIMAL(12, 1) NOT NULL,
    `tmin_tarifario_transportista_carga` INTEGER NOT NULL,
    `tmax_tarifario_transportista_carga` INTEGER NOT NULL,
    `id_creador_tarifario_transportista_carga` INTEGER NULL,
    `fecha_creado` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarifarios_transportistas_courriers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_transportista_tarifario_transportista_courrier` INTEGER NOT NULL,
    `ubigeo_tarifario_transportista_courrier` CHAR(11) NOT NULL,
    `kg_tarifario_transportista_courrier` DECIMAL(12, 1) NOT NULL,
    `kg_adicional_tarifario_transportista_courrier` DECIMAL(12, 1) NOT NULL,
    `tmin_tarifario_transportista_courrier` INTEGER NOT NULL,
    `tmax_tarifario_transportista_courrier` INTEGER NOT NULL,
    `id_creador_tarifario_transportista_courrier` INTEGER NULL,
    `fecha_creado` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ubigeo` (
    `UBIGEO` INTEGER NOT NULL,
    `DEPARTAMENTO` TEXT NULL,
    `PROVINCIA` TEXT NULL,
    `DESTINO` TEXT NULL,
    `Zona` TEXT NULL,
    `id` INTEGER NULL,

    PRIMARY KEY (`UBIGEO`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni_usuario` CHAR(11) NOT NULL,
    `clave_usuario` VARCHAR(250) NOT NULL,
    `colaborador_usuario` VARCHAR(250) NOT NULL,
    `brevete_usuario` VARCHAR(250) NOT NULL,
    `telefono_usuario` CHAR(9) NOT NULL,
    `email_usuario` VARCHAR(250) NOT NULL,
    `area_usuario` VARCHAR(250) NOT NULL,
    `cargo_usuario` VARCHAR(250) NOT NULL,
    `foto_usuario` VARCHAR(250) NOT NULL,
    `conectado` CHAR(1) NULL DEFAULT '0',
    `id_creador_usuario` INTEGER NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NOT NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `validaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_orden_servicio_validacion` CHAR(11) NOT NULL,
    `estado_validacion` CHAR(1) NOT NULL DEFAULT '0',
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `id_accion_validacion` INTEGER NULL,
    `id_creador_enviar_validacion` INTEGER NOT NULL,
    `fecha_creado` DATE NOT NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa_vehiculo` VARCHAR(250) NOT NULL,
    `tipo_vehiculo` VARCHAR(250) NOT NULL,
    `n_serie_vehiculo` VARCHAR(250) NOT NULL,
    `soat_vehiculo` VARCHAR(250) NOT NULL,
    `vigencia_desde_vehiculo` DATE NOT NULL,
    `vigencia_hasta_vehiculo` DATE NOT NULL,
    `ultima_revision_vehiculo` DATE NOT NULL,
    `vencimiento_vehiculo` DATE NOT NULL,
    `tarjeta_propiedad_vehiculo` VARCHAR(250) NOT NULL,
    `validado_vehiculo` CHAR(1) NOT NULL DEFAULT '1',
    `id_creador_vehiculo` INTEGER NULL,
    `estado` CHAR(1) NOT NULL DEFAULT '1',
    `fecha_creado` DATE NOT NULL,
    `fecha_actualizado` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
