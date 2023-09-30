import React from "react";
import { Grid } from "@mui/material";
import Box from "../../compenentes-compartilhados/Box/Box";
import './VisualizarDocCompleto.css'
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import { Viewer } from '@react-pdf-viewer/core';
 
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Create new plugin instance
const defaultLayoutPluginInstance = defaultLayoutPlugin();

function VisualizarDocCompleto () {
    return <Conteudo> 
        <Grid container spacing={2.0}>

            <Grid item xs={3}>
                <Box titulo="Titulo" />
            </Grid>

            <Grid item xs={9}>
            <Viewer
                fileUrl='/assets/Doc.pdf'
                plugins={[
                    // Register plugins
                    defaultLayoutPluginInstance,
                    ...
                ]}
                />
            </Grid>
        </Grid>

        </Conteudo>
}
export default VisualizarDocCompleto